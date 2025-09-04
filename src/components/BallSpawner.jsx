import React, { useState, useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";

function Ball({ position, velocity }) {
  const rigidBodyRef = useRef();

  useEffect(() => {
    if (rigidBodyRef.current) {
      rigidBodyRef.current.setLinvel(velocity);
    }
  }, [velocity]);

  return (
    <RigidBody
      ref={rigidBodyRef}
      colliders="ball"
      restitution={0.8}
      friction={0.5}
    >
      <mesh position={position} castShadow>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </RigidBody>
  );
}

export default function BallSpawner() {
  const { camera } = useThree();
  const [balls, setBalls] = useState([]);

  const throwBall = () => {
    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);
    const position = camera.position.clone();
    const velocity = dir.multiplyScalar(10);

    setBalls((prev) => [
      ...prev,
      {
        id: Math.random(),
        position: [position.x, position.y, position.z],
        velocity: [velocity.x, velocity.y, velocity.z],
      },
    ]);
  };

  return (
    <>
      <button
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 10,
        }}
        onClick={throwBall}
      >
        Throw Ball
      </button>

      {balls.map((ball) => (
        <Ball key={ball.id} position={ball.position} velocity={ball.velocity} />
      ))}
    </>
  );
}
