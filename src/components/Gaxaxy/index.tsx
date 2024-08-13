import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

interface GalaxyParallaxProps {
  children: React.ReactNode;
}

const RandomBlinkingStars = () => {
  const starsRef = useRef<THREE.Points>(null);

  // Generate random times for blinking with a very slow interval
  const blinkTimes = useMemo(() => {
    const times = new Float32Array(7000); // Adjust the count if needed
    for (let i = 0; i < times.length; i++) {
      times[i] = Math.random() * 15 + 10; // Random blink interval between 10 and 25 seconds
    }
    return times;
  }, []);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (starsRef.current) {
      const material = starsRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = elapsedTime;
    }
  });

  // Generate star positions with an even distribution
  const starPositions = useMemo(() => {
    const positions = new Float32Array(7000 * 3);
    const radius = 50; // Radius of the sphere
    for (let i = 0; i < 5000; i++) {
      // Randomly distribute stars in a spherical volume
      const theta = Math.random() * Math.PI * 2; // Random angle for the azimuthal direction
      const phi = Math.acos((Math.random() * 2) - 1); // Random angle for the polar direction
      const r = radius * Math.cbrt(Math.random()); // Random radius

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta); // X-coordinate
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta); // Y-coordinate
      positions[i * 3 + 2] = r * Math.cos(phi); // Z-coordinate
    }
    return positions;
  }, []);

  const starMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uBlinkTimes: { value: blinkTimes },
      },
      vertexShader: `
        attribute float aBlinkTime;
        varying float vBlinkTime;

        void main() {
          vBlinkTime = aBlinkTime;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = 2.0;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying float vBlinkTime;

        void main() {
          float alpha = abs(sin(uTime * vBlinkTime * 0.1)); // Further reduced the multiplier for a much slower blinking effect
          gl_FragColor = vec4(vec3(1.0), alpha);
        }
      `,
      transparent: true,
    });
  }, [blinkTimes]);

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
      </bufferGeometry>
    </points>
  );
};

export const GalaxyParallax = ({ children }: GalaxyParallaxProps) => {
  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      <Canvas
        camera={{ position: [0, 0, 10] }}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <RandomBlinkingStars />
      </Canvas>
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};




// import { Stars } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";

// interface GalaxyParallaxProps {
//   children: React.ReactNode;
// }

// export const GalaxyParallax = ({ children }: GalaxyParallaxProps) => {
//   return (
//     <div style={{ position: "relative", height: "100%", width: "100%" }}>
//       <Canvas
//         camera={{ position: [0, 0, 10] }}
//         style={{ position: "absolute", top: 0, left: 0 }}
//       >
//         {true && <Stars saturation={0} count={5000} speed={0.5} />}
//       </Canvas>
//       <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
//     </div>
//   );
// };
