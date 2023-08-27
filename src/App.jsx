import  { useState } from "react";
import FormCreation from "./FormCreation";
import ContainerCreate from "./ContainerCreate";

const App = () => {
  const [color, setColor] = useState("#000000");
  const [divs, setDivs] = useState([]);

  const colorData = (color) => {
    setColor(color);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const newDiv = {
      color,
      id: Date.now(), 
    };
    setDivs([...divs, newDiv]);
  };

  return (
    <>
      <FormCreation newColor={colorData} onSubmit={handleFormSubmit} />
      <ContainerCreate color={color} divs={divs} />
    </>
  );
};

export default App;
