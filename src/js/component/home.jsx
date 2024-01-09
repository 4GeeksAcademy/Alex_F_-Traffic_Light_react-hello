
import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
  const [selectedColor, setSelectedColor] = useState("red");

  const handleLight=()=>{
    if (selectedColor === "red") setSelectedColor("red");
    if (selectedColor === "yellow") setSelectedColor("yellow");
    else if (selectedColor === "green") setSelectedColor("green");
    
  }

  return (
    <div className="traffic-light">
      <div
        className={`red ${ selectedColor === "red" ? "active" : ""}`}
        onClick={() => setSelectedColor("red")}
      ></div>

      <div
        className={`yellow  ${selectedColor === "yellow" ? "active" : ""}`}
       
        onClick={() => setSelectedColor("yellow")}
      ></div>

      <div
        className={`green  ${selectedColor === "green" ? "active" : ""}`}
        onClick={() => setSelectedColor("green")}
      ></div>
    </div>
  );
};

export default Home;
