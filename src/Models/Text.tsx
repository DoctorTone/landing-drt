/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Text001: THREE.Mesh;
  };
  materials: {
    ["Orange.001"]: THREE.MeshStandardMaterial;
  };
};

export function Text(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("./models/3DText.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials["Orange.001"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("./models/3DText.glb");
