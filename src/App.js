import React from "react";
/*import Button from "./components/Button";*/
import SwitchColor from "./components/SwitchColor";
import "./App.css"; 

 function App() {
    return (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-600"> 
         <div className="text-4xl text-purple-600 border rounded pl-20 items-center">
            App Component, What will I do?
            
        </div>
             <SwitchColor />
        </div>
        
        );

 }
 
 export default App;