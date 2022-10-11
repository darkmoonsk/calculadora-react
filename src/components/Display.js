import React from 'react'
import styled from 'styled-components'

function Display(props) {
  return (
    <InputContainer>
        <input disabled value={(props.value)} />
    </InputContainer>
  )
}

export default Display


const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    input {
        box-shadow: inset 2px 1px 13px 5px rgba(0,0,0,0.41);
        color: white;
        width: 100%;
        height: 75px;
        background-color: #808080;
        border: 0;
        border-radius: 10px;
        padding: 15px;
        text-align: right;
        outline: 0;
        font-size: 35px;
        font-family: "Roboto";
    }
    
`