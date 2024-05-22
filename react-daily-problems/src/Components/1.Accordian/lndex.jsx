import React, { useState } from "react";
import data from "./Data";
import "./Style.css";
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentID) {
    console.log(getCurrentID);
    setSelected(getCurrentID);
  }
  function handleMultiSelection(getCurrentID) {
    let cpyMultiple = [...multiple];
    console.log(cpyMultiple);
    const findIndexOfCurrentID = cpyMultiple.indexOf(getCurrentID);
    console.log(findIndexOfCurrentID);
    if (findIndexOfCurrentID === -1) {
      cpyMultiple.push(getCurrentID);
    } else {
      cpyMultiple.splice(findIndexOfCurrentID, 1);
    }
    setMultiple(cpyMultiple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItems) => (
            <div className="item" key={dataItems.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItems.id)
                    : () => handleSingleSelection(dataItems.id)
                }
                className="title"
              >
                <h3>{dataItems.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItems.id) !== -1 && (
                    <div className="content">
                      <p>{dataItems.answer}</p>
                    </div>
                  )
                : selected === dataItems.id && (
                    <div className="content">
                      <p>{dataItems.answer}</p>
                    </div>
                  )}
            </div>
          ))
        ) : (
          <div>no data present</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
