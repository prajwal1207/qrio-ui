import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

interface GalaxyParallaxProps {
  children: React.ReactNode;
  starCount?: number;
}

const RandomBlinkingStars = ({ starCount = 7000 }: { starCount: number }) => {
  const starsRef = useRef<THREE.Points>(null);
  const radius = 50;

  // Generate random times for blinking
  const blinkTimes = useMemo(() => {
    const times = new Float32Array(starCount);
    for (let i = 0; i < starCount; i++) {
      times[i] = Math.random() * 15 + 10; // Random interval between 10 and 25 seconds
    }
    return times;
  }, [starCount]);

  // Generate random colors (white or purple)
  const colorFactors = useMemo(() => {
    const colors = new Float32Array(starCount);
    for (let i = 0; i < starCount; i++) {
      colors[i] = Math.random(); // Some stars will be white, others purple
    }
    return colors;
  }, [starCount]);

  // Generate star positions
  const starPositions = useMemo(() => {
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = radius * Math.cbrt(Math.random());

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, [starCount]);

  const starMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        attribute float aBlinkTime;
        attribute float aColorFactor;
        varying float vBlinkTime;
        varying float vColorFactor;

        void main() {
          vBlinkTime = aBlinkTime;
          vColorFactor = aColorFactor;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 3.5; // Adjust size here
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying float vBlinkTime;
        varying float vColorFactor;

        void main() {
          float alpha = abs(sin(uTime * vBlinkTime * 0.05)); 
          vec3 color = mix(vec3(1.0), vec3(0.7, 0.3, 1.0), step(0.5, vColorFactor)); 
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
    });
  }, []);

  useFrame(({ clock }) => {
    if (starsRef.current) {
      const material = starsRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <points ref={starsRef} material={starMaterial}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={starPositions}
          count={starPositions.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aBlinkTime"
          array={blinkTimes}
          count={blinkTimes.length}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aColorFactor"
          array={colorFactors}
          count={colorFactors.length}
          itemSize={1}
        />
      </bufferGeometry>
    </points>
  );
};

export const GalaxyParallax = ({ children, starCount }: GalaxyParallaxProps) => {
  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      <Canvas
        camera={{ position: [0, 0, 10] }}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <RandomBlinkingStars starCount={starCount ?? 7000} />
      </Canvas>
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};
