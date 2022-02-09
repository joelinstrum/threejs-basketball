import { useMemo, useEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const BasketballCourt = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const { nodes, scene } = useLoader(
    GLTFLoader,
    `${process.env.PUBLIC_URL}/assets/models/court/scene.gltf`
  );

  useMemo(() => {
    Object.values(nodes).forEach(
      (obj) =>
        obj.isMesh &&
        Object.assign(obj, { castShadow: true, receiveShadow: true })
    );
  }, [nodes]);

  useEffect(() => {
    setIsLoaded(true);
  }, [nodes, setIsLoaded]);

  return (
    <>
      {isLoaded && (
        <primitive
          position={[0, 0.25, 2]}
          object={scene}
          scale={[0.08, 0.08, 0.08]}
          rotation={[0, 0, 0]}
          castShadow
          receiveShadow
        />
      )}
    </>
  );
};

export default BasketballCourt;
