import React, { useState } from "react";
import "./style.css";
const ConditionalDropdown = () => {
    const[firstSelection,setFirstSelection]=useState("")
    const [secondSelection,setSecondSelection]=useState([])
  const data = {
    Coffee: ["Espresso", "Cappuccino", "Iced coffee", "Americano"],
    Tea: ["Charcoal Tea", "Ginger tea", "Green tea", "Black tea"],
    Wine: ["Red wine", "Rosé", "Cabernet Sauvignon", "Merlot"],
  };
  const handleFirstChange=(e)=>{
    setFirstSelection(e.target.value)
    console.log(firstSelection)
    setSecondSelection(data[e.target.value])
    console.log(secondSelection)

  }
  
  return (
    <div className="maindiv">
      <div className="mainflex">
        <div className="FirstSelectFlex">
          <h5>Main Category</h5>
          <select value={firstSelection} onChange={handleFirstChange} className="FirstSelect">
            <option value="">--Select--</option>
            {Object.keys(data).map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        </div>
        <div className="SecondSelectFlex">
          <h5>Sub Category</h5>
          <select className="SecondSelect">
            <option value="">--Select--</option>
            {secondSelection.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ConditionalDropdown;
