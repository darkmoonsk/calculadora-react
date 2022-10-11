import { useState } from "react";
import styled from "styled-components";
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";

function App() {
  const [currentNumber, setCurrentNumber] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [operation, setOperation] = useState("");
  

  const handleAddNumber = (number) => {
    setCurrentNumber((prevState) => `${prevState}${number}`);
  };

  const HandleClear = () => {
    setCurrentNumber("");
  };

  const handleDelete = () => {
    const newNumber = currentNumber.substring(0,  currentNumber.length - 1)
    setCurrentNumber(newNumber);
  };

  const handleDefineOperation = (operation) => {
    if(currentNumber){
        if(!firstNumber){
          setFirstNumber(currentNumber)
          HandleClear();
        }
    }
    setOperation(operation);
  };

  const HandleClearOperation = () => {
    setFirstNumber("");
  }

  const handleAddDot = () => {
    if(currentNumber.includes(".") === false && currentNumber !== ""){
      setCurrentNumber(prevState => prevState + ".");
    }
  }

  const handleResult = (result) => {
    if(Number.isInteger(result)) {
      setCurrentNumber(result.toString());
    }else {
      setCurrentNumber(result.toFixed(2).toString());
    }
  }

  const handleCalc = () => {
    switch (operation) {
      case "*":
        if(firstNumber && currentNumber){
          const calc = Number(firstNumber) * Number(currentNumber);
          handleResult(calc);
          HandleClearOperation();
        }
        break;
      case "+":
        if(firstNumber && currentNumber){
          const calc = Number(firstNumber) + Number(currentNumber);
          handleResult(calc);
          HandleClearOperation();
        }
        break;
      case "-":
        if(firstNumber && currentNumber){
          const calc = Number(firstNumber) - Number(currentNumber);
          handleResult(calc);
          HandleClearOperation();
        }
        break;
        case "/":
        if(firstNumber && currentNumber){
          const calc = Number(firstNumber) / Number(currentNumber);
          handleResult(calc);
          HandleClearOperation();
        }
        break;  
    
      default:
        break;
    }
  };


  return (
    <Container>
      <Content>
        <Display value={currentNumber} />
        <Keyboard
          onHandleAddNumber={handleAddNumber}
          onHandleClear={HandleClear}
          onHandleDelete={handleDelete}
          onHandleAddDot={handleAddDot}
          onHandleDefineOperation={handleDefineOperation}
          onHandleCalc={handleCalc}
        />
      </Content>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #444444;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  box-shadow: 9px 12px 22px -4px rgba(0, 0, 0, 0.68);
  padding: 35px;
  border: 1px solid #585858;
  border-radius: 20px;
  background: rgb(195, 188, 188);
  background: linear-gradient(
    352deg,
    rgba(195, 188, 188, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(185, 193, 194, 1) 100%
  );
  width: 100%;
  max-width: 425px;
  min-height: 550px;
`;
