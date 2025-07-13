import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { City1 } from "./City1";

const HeroExperience = () => {
  return (
    <Canvas className="w-full h-full" camera={{ position: [10, 5, 10], fov: 20 }}>
      <OrbitControls
        enableZoom={true}
        minDistance={10}
        maxDistance={20}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />
      <ambientLight intensity={2} />
      <directionalLight position={[-2, 0, 3]} intensity={3} color={"#8a2be2"} />
      <directionalLight position={[2, 0, 3]} intensity={3} color={"#1c34ff"} />

      <group>
        {/* <City scale={0.009} position={[0, 0, 0]} /> */}
        <City1 scale={0.023} position={[0, -3, 0]} />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
