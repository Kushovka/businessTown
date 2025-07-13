import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Room } from "./Room";

const OurStoryExperience = () => {
  return (
    <Canvas
      className="w-full h-full z-50"
      camera={{ position: [10, 7, 10], fov: 25 }}
    >
      <OrbitControls
        enableZoom={true}
        minDistance={10}
        maxDistance={20}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={1} />
      <directionalLight position={[-2, 0, 3]} intensity={2} color={"#8a2be2"} />
      <directionalLight position={[2, 0, 3]} intensity={2} color={"#1c34ff"} />

      <group>
        <Room scale={0.7} position={[0, -2, 0]} />
      </group>
    </Canvas>
  );
};

export default OurStoryExperience;
