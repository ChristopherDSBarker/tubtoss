import React from "react";
import { RigidBody } from "@react-three/rapier";

export default function Ground() {
  return (
    <RigidBody type="fixed" restitution={0.5}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </RigidBody>
  );
}
