import { useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei/core/useGLTF";

export const BasketballCourt = (props) => {
  const { scene } = useGLTF("/assets/models/court/scene.gltf");
  useLayoutEffect(
    () =>
      scene.traverse(
        (obj) => obj.isMesh && (obj.castShadow = obj.receiveShadow = true)
      ),
    [scene]
  );
  return <primitive object={scene} {...props} />;
};

export default BasketballCourt;
