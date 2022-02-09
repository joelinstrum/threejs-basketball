import { Suspense } from "react";
import * as THREE from "three";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import BasketballCourt from "../components/basketball-court";
import Ground from "../components/ground";
import Loader from "../components/loader";
import Lighting from "../components/lighting";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

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
        shadows
      >
        <Suspense fallback={<Loader />}>
          <group>
            <Lighting />
            <Ground />
            <BasketballCourt scale={0.08} position={[1.25, 0.25, 2]} />
          </group>
          <PerspectiveCamera position={[4, 3, 6]} makeDefault />
          <OrbitControls
            enablePan={true}
            enableZoom
            enableRotate
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
          />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
};

export default App;
