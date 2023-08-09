import { useState } from "react";
import "./App.css";

function App() {
  const [digit, setDigit] = useState(0);
  const [secDigit, setSecDigit] = useState(0);
  const [operation, setOperation] = useState("");

  const handleReset = () => {
    setDigit(0);
    setSecDigit(0);
    setOperation("");
  };

  const handleNumber = (value) => {
    if (digit === 0) {
      if (value === ".") return;
      if (value === "0") return;
      setDigit(String(value));
    } else {
      if (value === ".") {
        if (digit.split(".").length === 1) {
          setDigit(String(digit + value));
        } else {
          setDigit(String(digit));
        }
      } else {
        setDigit(String(digit + value));
      }
    }
  };

  const calcResult = (digit, secDigit, operation) => {
    let result = eval(secDigit + operation + digit);
    if (typeof result === "number") {
      setDigit(result);
      setSecDigit(secDigit + operation + digit + "=" + result);
      setOperation("");
    } else {
      setDigit(NaN);
      setOperation("");
    }
  };

  const handleOperation = (op) => {
    setOperation("");
    switch (op) {
      case "+":
        if (secDigit === 0) {
          setOperation("+");
          setSecDigit(String(digit + operation));
          setDigit(0);
        } else {
          setOperation("+");
          setSecDigit(String(secDigit + operation + digit));
          setDigit(0);
        }
        break;
      case "-":
        if (secDigit === 0) {
          setOperation("-");
          setSecDigit(String(digit + operation));
          setDigit(0);
        } else {
          setOperation("-");
          setSecDigit(String(secDigit + operation + digit));
          setDigit(0);
        }

        break;
      case "/":
        if (secDigit === 0) {
          setOperation("/");
          setSecDigit(String(digit + operation));
          setDigit(0);
        } else {
          setOperation("/");
          setSecDigit(String(secDigit + operation + digit));
          setDigit(0);
        }

        break;
      case "x":
        if (secDigit === 0) {
          setOperation("*");
          setSecDigit(String(digit + operation));
          setDigit(0);
        } else {
          setOperation("*");
          setSecDigit(String(secDigit + operation + digit));
          setDigit(0);
        }
        break;
      case "=":
        if (operation === "") break;
        calcResult(digit, secDigit, operation);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <div className="wrapper">
        <div id="display" className="display">
          <div className="mini">
            {secDigit === 0 ? "" : secDigit + operation}
          </div>
          {digit}
        </div>
        <div className="buttons">
          <button
            className="btn clear"
            value="AC"
            onClick={() => handleReset()}
            id="clear"
          >
            AC
          </button>
          <button
            onClick={(e) => handleOperation(e.target.value)}
            className="btn equals light"
            value="="
            id="equals"
          >
            =
          </button>
          <button
            onClick={(e) => handleOperation(e.target.value)}
            className="btn add light"
            value="+"
            id="add"
          >
            +
          </button>
          <button
            onClick={(e) => handleOperation(e.target.value)}
            className="btn sub light"
            value="-"
            id="subtract"
          >
            -
          </button>
          <button
            onClick={(e) => handleOperation(e.target.value)}
            className="btn light"
            value="/"
            id="divide"
          >
            /
          </button>
          <button
            onClick={(e) => handleOperation(e.target.value)}
            className="btn light"
            value="x"
            id="multiply"
          >
            X
          </button>
          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="btn"
            value="7"
            id="seven"
          >
            7
          </button>
          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="btn"
            value="8"
            id="eight"
          >
            8
          </button>
          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="btn"
            value="9"
            id="nine"
          >
            9
          </button>

          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="btn"
            value="4"
            id="four"
          >
            4
          </button>
          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="btn"
            value="5"
            id="five"
          >
            5
          </button>
          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="btn"
            value="6"
            id="six"
          >
            6
          </button>
          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="btn"
            value="1"
            id="one"
          >
            1
          </button>
          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="btn"
            value="2"
            id="two"
          >
            2
          </button>
          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="btn"
            value="3"
            id="three"
          >
            3
          </button>

          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="btn zero"
            value="0"
            id="zero"
          >
            0
          </button>
          <button
            onClick={(e) => handleNumber(e.target.value)}
            className="btn"
            value="."
            id="decimal"
          >
            .
          </button>
        </div>
      </div>
      <div className="footer">
        Designed and Coded By{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.freecodecamp.org/AhmetFM"
        >
          Ahmet Furkan Meric
        </a>
      </div>
    </>
  );
}

export default App;
