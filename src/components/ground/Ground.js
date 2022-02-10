import { DoubleSide } from "three";

const Ground = () => (
  <mesh
    position={[0, 0, 0]}
    rotation={[Math.PI / 2, 0, 0]}
    scale={60}
    receiveShadow
  >
    <planeBufferGeometry />
    <meshBasicMaterial color="#808080" side={DoubleSide} />
  </mesh>
);

export default Ground;
