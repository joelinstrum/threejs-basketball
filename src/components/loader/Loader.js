import { Html, useLoader, useProgress } from "@react-three/drei";

function Loader() {
  const { active, progress, errors, item, loaded, total } = useProgress();
  console.log(errors);
  return <Html center>{progress} % loaded</Html>;
}

export default Loader;
