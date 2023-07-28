import React, { useState } from "react";

const Calculadora = () => {
  const [display, setDisplay] = useState("0");
  const [prevValue, setPrevValue] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumberClick = (number) => {
    if (display === "0" || display === "Error") {
      setDisplay(number.toString());
    } else {
      setDisplay((prevDisplay) => prevDisplay + number.toString());
    }
  };

  const handleOperatorClick = (op) => {
    setPrevValue(display);
    setOperator(op);
    setDisplay("0");
  };

  const handleEqualsClick = () => {
    const current = parseFloat(display);
    const previous = parseFloat(prevValue);

    if (!Number.isNaN(previous) && !Number.isNaN(current)) {
      let result;
      switch (operator) {
        case "+":
          result = previous + current;
          break;
        case "-":
          result = previous - current;
          break;
        case "*":
          result = previous * current;
          break;
        case "/":
          result = previous / current;
          break;
        default:
          return;
      }
      setDisplay(result.toString());
      setPrevValue("");
      setOperator("");
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setPrevValue("");
    setOperator("");
  };

  const buttonStyle = "w-20 h-12 text-2xl hover:bg-gray-200 cursor-pointer";

  return (
    <div className="flex flex-col w-72 mx-auto p-4 border">
      <div className="w-full h-10 mb-2 p-2 bg-gray-200 text-right">
        {display}
      </div>
      <div className="flex justify-between mb-2">
        <button className={buttonStyle} onClick={() => handleNumberClick("7")}>
          7
        </button>
        <button className={buttonStyle} onClick={() => handleNumberClick("8")}>
          8
        </button>
        <button className={buttonStyle} onClick={() => handleNumberClick("9")}>
          9
        </button>
        <button
          className={buttonStyle}
          onClick={() => handleOperatorClick("+")}
        >
          +
        </button>
      </div>
      <div className="flex justify-between mb-2">
        <button className={buttonStyle} onClick={() => handleNumberClick("4")}>
          4
        </button>
        <button className={buttonStyle} onClick={() => handleNumberClick("5")}>
          5
        </button>
        <button className={buttonStyle} onClick={() => handleNumberClick("6")}>
          6
        </button>
        <button
          className={buttonStyle}
          onClick={() => handleOperatorClick("-")}
        >
          -
        </button>
      </div>
      <div className="flex justify-between mb-2">
        <button className={buttonStyle} onClick={() => handleNumberClick("1")}>
          1
        </button>
        <button className={buttonStyle} onClick={() => handleNumberClick("2")}>
          2
        </button>
        <button className={buttonStyle} onClick={() => handleNumberClick("3")}>
          3
        </button>
        <button
          className={buttonStyle}
          onClick={() => handleOperatorClick("*")}
        >
          *
        </button>
      </div>
      <div className="flex justify-between mb-2">
        <button className={buttonStyle} onClick={() => handleNumberClick("0")}>
          0
        </button>
        <button
          className={buttonStyle}
          onClick={() => handleOperatorClick(".")}
        >
          .
        </button>
        <button className={buttonStyle} onClick={handleEqualsClick}>
          =
        </button>
        <button
          className={buttonStyle}
          onClick={() => handleOperatorClick("/")}
        >
          /
        </button>
      </div>
      <div className="flex justify-between mb-2">
        <button className={`${buttonStyle} bg-blue-300 hover:bg-blue-400`} onClick={handleClear}>
          C
        </button>
      </div>
    </div>
  );
};

export default Calculadora;
