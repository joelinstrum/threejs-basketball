import { useRef } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useThree, useFrame, extend } from "@react-three/fiber";

extend({ OrbitControls });

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame with useFrame
  const controls = useRef();
  // useFrame(() => controls.current.update());
  return (
    <>
      <orbitControls
        ref={controls}
        args={[camera, domElement]}
        autoRotate={true}
        enableZoom={true}
      />
      <PerspectiveCamera position={[4, 3, 6]} makeDefault />
    </>
  );
};

export default CameraControls;
