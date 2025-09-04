import React from "react";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

export default function Tub() {
  return (
    <RigidBody type="fixed">
      <mesh position={[0, 0.5, -5]} receiveShadow castShadow>
        <cylinderGeometry args={[1.5, 1.5, 1, 32, 1, true]} />
        <meshStandardMaterial color="blue" side={THREE.DoubleSide} />
      </mesh>
    </RigidBody>
  );
}
