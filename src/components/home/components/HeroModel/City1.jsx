import React from "react";
import { useGLTF } from "@react-three/drei";

export function City1(props) {
  const { nodes, materials } = useGLTF("/models/city1-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane_0.geometry}
        material={materials["Material.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane_1.geometry}
        material={materials["Material.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane_2.geometry}
        material={materials.ground}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Plane_3.geometry}
        material={materials.hotel_glas}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/city1-transformed.glb");
