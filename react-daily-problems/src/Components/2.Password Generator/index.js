import React from "react";
import "./Style.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PasswordGeneratoe = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(5);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const setLengthOfPassword = (e) => {
    setLength(e.target.value);
    console.log(length);
  };

  const handleUppercaseChange = (e) => {
    setUppercase(e.target.checked);
  };

  const handleLowercaseChange = (e) => {
    setLowercase(e.target.checked);
  };

  const handleSymbolcaseChange = (e) => {
    setSymbols(e.target.checked);
  };

  const handleNumbercaseChange = (e) => {
    setNumbers(e.target.checked);
  };
  let genPassword = "";
  let Uppercaseset = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
  let Lowercaseset = "abcdefghijklmnopqrstuvwxyz";
  let Numbersset = "0123456789";
  let Symbolsset = "!@#$%^&*()_+=-";
  let newpassword = "";

  const generatePassword = () => {
    if (
      uppercase == false &&
      lowercase == false &&
      numbers == false &&
      symbols == false
    ) {
      toast.error("Please select at least one character type");
      return;
    }

    if (uppercase === true) {
      genPassword += Uppercaseset;
    }
    if (lowercase === true) {
      genPassword += Lowercaseset;
    }
    if (numbers === true) {
      genPassword += Numbersset;
    }
    if (symbols === true) {
      genPassword += Symbolsset;
    }
    console.log(genPassword);

    if (genPassword.length === 0) {
      toast.error("Please select at least one character type");
      return;
    }
    for (let i = 0; i < length; i++) {
      let randNumber = Math.floor(Math.random() * genPassword.length);
      console.log(randNumber);
      newpassword = newpassword + genPassword[randNumber];
    }
    newpassword = newpassword.slice(0, length);
    setPassword(newpassword);
    newpassword = "";
    console.log(password);
    toast.success("Password Generated");

  };

  const copyPassword = () => {
    if (password.length === 0) {
      toast.error("Please generate a password first");
    } else {
      navigator.clipboard.writeText(password);
      toast.success("Password copied to clipboard");
    }
  };

  return (
    <>
      <ToastContainer />

      <div class="container">
        <h1>Password Generator</h1>
        <div class="options">
          <label className="length">
            Enter string of length between 5 to 20
            <input
              type="number"
              value={length}
              min={5}
              max={20}
              id="length"
              onChange={setLengthOfPassword}
            />
          </label>
          <label>
            <input
              type="checkbox"
              id="uppercase"
              onChange={handleUppercaseChange}
            />
            Include Uppercase Letters
          </label>
          <label>
            <input
              type="checkbox"
              id="lowercase"
              onChange={handleLowercaseChange}
            />
            Include Lowercase Letters
          </label>
          <label>
            <input
              type="checkbox"
              id="numbers"
              onChange={handleNumbercaseChange}
            />
            Include Numbers
          </label>
          <label>
            <input
              type="checkbox"
              id="symbols"
              onChange={handleSymbolcaseChange}
            />
            Include Symbols
          </label>
        </div>
        <div>
          <button class="generate" onClick={generatePassword}>
            Generate Password
          </button>
        </div>
        <div class="result">
          <h2>Your Password:</h2>
          <div className="finalresult">
            {password}
            <button onClick={copyPassword} class="copy">
              Copy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGeneratoe;
