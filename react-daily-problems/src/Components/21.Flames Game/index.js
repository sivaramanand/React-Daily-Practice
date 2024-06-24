import React, { useState } from "react";
import "./flamesstyle.css";

const FlamesGame = () => {
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [outputFlames, setOutputFlames] = useState([]);
  const [converted1, setConverted1] = useState("");
  const [converted2, setConverted2] = useState("");
  const [finalanswer, setFinalAnswer] = useState("");

  const calculateFlamesLogic = () => {
    const flames = [
      "Friends",
      "Love",
      "Affection",
      "Marriage",
      "Enemy",
      "Sibling",
    ];

    let name1 = firstname.replace(" ", "").trim();
    let name2 = lastName.replace(" ", "").trim();

    let trimmedname1 = name1.split("");
    let trimmedname2 = name2.split("");

    for (let i = 0; i < trimmedname1.length; i++) {
      for (let j = 0; j < trimmedname2.length; j++) {
        if (trimmedname1[i] === trimmedname2[j]) {
          trimmedname1.splice(i, 1);
          trimmedname2.splice(j, 1);
          i--;
          break;
        }
      }
    }

    let converted1 = trimmedname1.join("");
    let converted2 = trimmedname2.join("");

    setConverted1(converted1);
    setConverted2(converted2);

    const totalLength = converted1.length + converted2.length;

    let index = 0;
    let tempFlames = [...flames];
    let rounds = [];
    while (tempFlames.length > 1) {
      index = (index + totalLength - 1) % tempFlames.length;
      rounds.push([...tempFlames]);
      tempFlames.splice(index, 1);
    }

    let finalanswer = tempFlames[0];
    setOutputFlames(rounds);
    setFinalAnswer(finalanswer);
  };

  const calculateFlames = (e) => {
    e.preventDefault();
    calculateFlamesLogic();
  };

  return (
    <div className="maindiv">
      <h1>FLAMES Game</h1>
      <form onSubmit={calculateFlames}>
        <div className="formdiv">
          <input
            className="firstn"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
          />
          <input
            className="secondn"
            placeholder="Second name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <button type="submit" className="button">
            Calculate
          </button>
        </div>
      </form>
      <div className="answerrow">
        <div>Remaining first name after cancellation - {converted1}</div>
        <div>Remaining second name after cancellation - {converted2}</div>
        {outputFlames.map((item, index) => (
          <div key={index}>
            Output after {index + 1}th round = {item.join(", ")}
          </div>
        ))}
        <div>
          The final answer between {firstname} and {lastName} is {finalanswer}
        </div>
      </div>
    </div>
  );
};

export default FlamesGame;
