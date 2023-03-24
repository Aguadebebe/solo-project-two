import React, { useState } from "react";
import Button from "./Button";


 

function SwitchColor() {
 const [colorIndex, setColorIndex] = useState(0);
 const colorArray = ["goldenrod", "green", "blue", "yellow"];

 const handleClick = () => {
    console.log("clicked")
    setColorIndex((colorIndex + 1) % colorArray.length);
 };
 return (
    <div>
      <Button onClick={handleClick} />
      <div   style={{ backgroundColor: colorArray[colorIndex], width: "300px", height: "300px", borderRadius: "15%", position: "relative", left: "41vw", top: "-450px"}}></div>
    </div>
 )
  
     
}
  
 export default SwitchColor;
