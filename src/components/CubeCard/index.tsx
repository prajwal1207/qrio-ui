import { useGSAP } from "@gsap/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import gsap from "gsap";
import { useRef } from "react";
import * as THREE from "three";
import img_aayush from "../../assets/images/img-aayush.jpg";
import img_neelanshi from "../../assets/images/img-neelanshi.jpg";
import img_samyak from "../../assets/images/img-samyak.jpg";
import img_yashi from "../../assets/images/img-yashi.jpg";
import img_qrio from "../../assets/images/QRIO.png";

const CubeCard = () => {
  const cubeRef = useRef<THREE.Mesh>(null);

  // Load textures for the four sides of the cube
  const texture1 = useLoader(THREE.TextureLoader, img_yashi);
  const texture2 = useLoader(THREE.TextureLoader, img_neelanshi);
  const texture3 = useLoader(THREE.TextureLoader, img_samyak);
  const texture4 = useLoader(THREE.TextureLoader, img_aayush);
  const texture5 = useLoader(THREE.TextureLoader, img_qrio);

  // Configure texture mapping for each texture
  const configureTexture = (texture: any) => {
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
  };

  useGSAP(() => {
    if (cubeRef.current) {
      // GSAP animation for slow and continuous 360-degree rotation
      gsap.to(cubeRef.current.rotation, {
        x: Math.PI * 2, // Full 360-degree rotation
        y: Math.PI * 2, // Full 360-degree rotation
        z: Math.PI * 2, // Full 360-degree rotation
        duration: 30, // Longer duration for slower rotation
        repeat: -1, // Infinite repetition
        ease: "linear", // Smooth and constant rotation
      });
    }
  }, []);

  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
      }}
      camera={{ position: [10, 10, 10] }}
    >
      {/* Lighting for better visibility */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 10]} intensity={1} />

      <mesh ref={cubeRef}>
        {/* Cube geometry */}
        <boxGeometry args={[11, 11, 11]} />

        {/* Assign textures to the 4 sides */}
        <meshStandardMaterial
          map={configureTexture(texture1)}
          attach="material-0"
          transparent
          opacity={1}
        />
        <meshStandardMaterial
          map={configureTexture(texture2)}
          attach="material-1"
          transparent
          opacity={1}
        />
        <meshStandardMaterial
          map={configureTexture(texture3)}
          attach="material-2"
          transparent
          opacity={1}
        />
        <meshStandardMaterial
          map={configureTexture(texture4)}
          attach="material-3"
          transparent
          opacity={1}
        />

        <meshStandardMaterial
          map={configureTexture(texture5)}
          color="white"
          attach="material-4"
          transparent
          opacity={1}
        />
        <meshStandardMaterial
          map={configureTexture(texture5)}
          color="white"
          attach="material-5"
          transparent
          opacity={1}
        />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default CubeCard;
