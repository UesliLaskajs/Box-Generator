import  { useState } from "react";

const FormCreation = (prop) => {
  const [color, setColor] = useState("#000000");

  const handleSubmit = (e) => {
    e.preventDefault();
    prop.newColor(color);
    prop.onSubmit(e); 
  };

  const formStyle = {
    width: '100%',
    height: '300px',
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center'
  };
  const inputStyle = {
    width: '50px',
    height: '50px',
    margin: '0px 30px '
  };
  const inputBtn={
    width: '40px' ,
    height:'40px' ,
    margin: '0 0 20px'
  
  }

  return (
    <div className="forrm" style={formStyle}>
      <form onSubmit={handleSubmit}>
        <input style={inputStyle}
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <input type="submit" style={inputBtn}  value="Add" />
      </form>
    </div>
  );
};

export default FormCreation;
