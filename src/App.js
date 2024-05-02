import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const buttons = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "0",
    "/",
    "C",
  ];

  const buttonclick = (value) => {
    setInput((prevInput) => prevInput + value);
  };
  const EqualClick = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clearclick = () => {
    setInput("");
    setResult("");
  };
  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {buttons.map((value, index) => (
          <button
            key={index}
            onClick={() => (value === "C" ? clearclick() : buttonclick(value))}
          >
            {value}
          </button>
        ))}
        <button onClick={() => EqualClick()}>=</button>
      </div>
    </div>
  );
}
