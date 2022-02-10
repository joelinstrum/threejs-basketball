import { Suspense } from "react";
import * as THREE from "three";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import BasketballCourt from "../components/basketball-court";
import Ground from "../components/ground";
import Loader from "../components/loader";
import Lighting from "../components/lighting";
import SkyBox from "../components/skybox";
import CameraControls from "../components/camera-controls";

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <CanvasContainer>
      <Canvas
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
        dpr={[1, 2]}
        shadows={{ type: "PCFSoftShadowMap" }}
      >
        <Suspense fallback={<Loader />}>
          <group>
            <Lighting />
            <Ground />
            <BasketballCourt scale={0.2} position={[0.25, 0, 0.3]} />
          </group>
          <CameraControls />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
};

export default App;
