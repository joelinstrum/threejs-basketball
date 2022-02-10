import { useRef } from "react";
import { DirectionalLightHelper } from "three";
import { useHelper } from "@react-three/drei";

const Lighting = () => {
  const ref = useRef();
  useHelper(ref, DirectionalLightHelper, 2);

  return (
    <>
      <ambientLight intensity={0.2} l />
      <directionalLight
        ref={ref}
        intensity={1}
        position={[0, 2, 2]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        castShadow
      />
    </>
  );
};

export default Lighting;
