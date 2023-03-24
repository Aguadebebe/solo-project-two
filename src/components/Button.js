import React from "react";
 
  
 
  function Button(props) {
    return (
        <div className="flex justify-center items-center h-screen z-0">
         <button className="text-gray-400 hover:bg-sky-800 text-4xl border rounded" onClick={props.onClick}>Change Color</button>
        </div>
    )
  }

  export default Button;