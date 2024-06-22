import React, { useState } from "react";
import "./style.css";
import { toast, ToastContainer } from "react-toastify";

const Tictactoe = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setIsXTurn] = useState(true);
  const checkWin = () => {
    const winnerArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let logic of winnerArray) {
      let [a, b, c] = logic;
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };
  const isWinner = checkWin();
  const fillMove = (index) => {
    if (state[index] || isWinner) {
      toast.error("Cant modify alreeady modified!", {
        position: "top-left",
      });

      return;
    }
    const copyindex = [...state];
    copyindex[index] = isXturn ? "X" : "O";
    setState(copyindex);
    setIsXTurn(!isXturn);
    console.log(state);
    checkWin();
  };
  return (
    <div>
      <div className="board-container">
        <div className="firstrow">
          <div className="cell" onClick={() => fillMove(0)}>
            {state[0]}
          </div>
          <div className="cell" onClick={() => fillMove(1)}>
            {state[1]}
          </div>
          <div className="cell" onClick={() => fillMove(2)}>
            {state[2]}
          </div>
        </div>
        <div className="secondrow">
          <div className="cell" onClick={() => fillMove(3)}>
            {state[3]}
          </div>
          <div className="cell" onClick={() => fillMove(4)}>
            {state[4]}
          </div>
          <div className="cell" onClick={() => fillMove(5)}>
            {state[5]}
          </div>
        </div>
        <div className="thirdrow">
          <div className="cell" onClick={() => fillMove(6)}>
            {state[6]}
          </div>
          <div className="cell" onClick={() => fillMove(7)}>
            {state[7]}
          </div>
          <div className="cell" onClick={() => fillMove(8)}>
            {state[8]}
          </div>
        </div>
      </div>
      {!isWinner && (
        <div className="winner">
          now it is the turn of {isXturn ? "X" : "O"}
        </div>
      )}

      {isWinner && <div className="winner">Winner is {isWinner}</div>}
    </div>
  );
};

export default Tictactoe;
