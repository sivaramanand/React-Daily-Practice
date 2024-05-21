import React, { useState } from "react";
import data from "./Data";
const Accordian = () => {
  //single-selection
  //multi-selection
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentID){
    console.log(getCurrentID)
    setSelected(getCurrentID)
  }
  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItems) => (
            <div className="item">
              <div
                onClick={() => {
                    handleSingleSelection(dataItems.id);
                }}
                className="title"
              >
                <h3>{dataItems.question}</h3>
                <span>+</span>
              </div>
              {
                selected===dataItems.id{

                }
              }
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
