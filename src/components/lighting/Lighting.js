const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.2} l />
      <spotLight intensity={1} position={[4, 500, 4]} />
    </>
  );
};

export default Lighting;
