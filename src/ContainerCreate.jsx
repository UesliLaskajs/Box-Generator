
const ContainerCreate = (prop) => {
  const container = {
    width: "100%",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="container_block" style={container}>
      {prop.divs.map((div) => (
        <div
          key={div.id}
          style={{
            backgroundColor: div.color || "transparent",
            width: "100px",
            height: "100px",
            margin: "10px", 
          }}
        ></div>
      ))}
    </div>
  );
};

export default ContainerCreate;
