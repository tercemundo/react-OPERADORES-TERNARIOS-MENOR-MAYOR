import React, { useState } from "react";
import "./style.css";



export default function App() {

  const [ Age, setAge ] = useState(0);

  function handleChange(e){
    const { value } = e.target;
    setAge(value);
  }

  return (
    <div>
      <input type="number" onChange={handleChange} />
      { Age >= 18 ? <p> Sos mayor de edad</p>: <p> Sos menor</p>}
    </div>
  );
}
