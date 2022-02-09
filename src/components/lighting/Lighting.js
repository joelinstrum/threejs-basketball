const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.2} l />
      <spotLight
        angle={0.1}
        position={[10, 10, 10]}
        intensity={1.5}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.00001}
      />
    </>
  );
};

export default Lighting;
