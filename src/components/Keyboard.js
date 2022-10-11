import React from "react";
import styled from "styled-components";
import Button from "./Button";

function Keyboard(props) {
  return (
    <KeyboardContainer>
        <Row>
            <Button label="7" onClick={() => props.onHandleAddNumber("7")} />
            <Button label="8" onClick={() => props.onHandleAddNumber("8")} />
            <Button label="9" onClick={() => props.onHandleAddNumber("9")} />
            <Button label="C" onClick={() => props.onHandleClear()} />
            
        </Row>
        <Row>
            <Button label="4" onClick={() => props.onHandleAddNumber("4")} />
            <Button label="5" onClick={() => props.onHandleAddNumber("5")} />
            <Button label="6" onClick={() => props.onHandleAddNumber("6")} />
            <Button label="*" onClick={() => props.onHandleDefineOperation("*")} />
        </Row>
        <Row>
            <Button label="1" onClick={() => props.onHandleAddNumber("1")} />
            <Button label="2" onClick={() => props.onHandleAddNumber("2")} />
            <Button label="3" onClick={() => props.onHandleAddNumber("3")} />
            <Button label="+" onClick={() => props.onHandleDefineOperation("+")} />
        </Row>
        <Row>
            <Button label="." onClick={() => props.onHandleAddDot(".")} />
            <Button label="0" onClick={() => props.onHandleAddNumber("0")} />
            <Button label="/" onClick={() => props.onHandleDefineOperation("/")} />
            <Button label="-"  onClick={() => props.onHandleDefineOperation("-")} />
        </Row>
        <Footer>
            <Button label="DEL" onClick={() => props.onHandleDelete()} />
            <Button label="="  onClick={() => props.onHandleCalc()} />
        </Footer>
    </KeyboardContainer>
  )
}

export default Keyboard

const KeyboardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 0px 8px 0px;
  margin-top: 50px;
`

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: no-wrap;
    justify-content: center;
    gap: 15px;
    margin-bottom: 20px;
`

const Footer = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
`
