import { DoubleSide } from "three";

const Ground = () => (
  <mesh
    position={[0, 0, 0]}
    rotation={[Math.PI / 2, 0, 0]}
    scale={[10, 10, 10]}
    receiveShadow
  >
    <planeBufferGeometry />
    <meshBasicMaterial color="green" side={DoubleSide} />
  </mesh>
);

export default Ground;
