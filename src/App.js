import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Ground from "./components/Ground";
import Tub from "./components/Tub";
import BallSpawner from "./components/BallSpawner";

function App() {
  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 50 }} shadows>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <OrbitControls />

      <Physics gravity={[0, -9.81, 0]}>
        <Ground />
        <Tub />
        <BallSpawner />
      </Physics>
    </Canvas>
  );
}

export default App;
