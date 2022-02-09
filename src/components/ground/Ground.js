import { DoubleSide } from "three";

const Ground = () => (
  <mesh
    position={[0, 0, 0]}
    rotation={[Math.PI / 2, 0, 0]}
    scale={[12, 12, 12]}
    receiveShadow
  >
    <planeBufferGeometry />
    <meshBasicMaterial color="green" side={DoubleSide} />
  </mesh>
);

export default Ground;
