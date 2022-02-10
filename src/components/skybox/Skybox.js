import { useEffect } from "react";
import { CubeTextureLoader } from "three";
import { useThree } from "@react-three/fiber";

function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();

  useEffect(() => {
    const texture = loader.load([
      "/assets/skyboxes/union-square/negx.jpg",
      "/assets/skyboxes/union-square/negy.jpg",
      "/assets/skyboxes/union-square/negz.jpg",
      "/assets/skyboxes/union-square/posx.jpg",
      "/assets/skyboxes/union-square/posy.jpg",
      "/assets/skyboxes/union-square/posz.jpg",
    ]);
    // Set the scene background property to the resulting texture.
    scene.background = texture;
  }, [loader]);
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.

  return null;
}

export default SkyBox;
