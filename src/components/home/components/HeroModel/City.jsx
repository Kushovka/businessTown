import React from "react";
import { useGLTF } from "@react-three/drei";

export function City(props) {
  const { nodes, materials } = useGLTF("/models/city-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={
          nodes.BACKGROUND_BUILDINGS_1001_BACKGROUND_BUILDINGS_1_0.geometry
        }
        material={materials.BACKGROUND_BUILDINGS_1}
        position={[-63.31, 108.41, -203.116]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.RED_FLARE_RED_FLARE_0.geometry}
        material={materials.RED_FLARE}
        position={[-565.072, 121.344, -167.236]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Flare_Flare_0.geometry}
        material={materials.Flare}
        position={[-224.476, 193.037, -3.508]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.BACKGROUND_BUILDING_2001_BACKGROUND_BUILDING_2_0.geometry
        }
        material={materials.BACKGROUND_BUILDING_2}
        position={[-16.876, 22.302, 175.825]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/city-transformed.glb");
