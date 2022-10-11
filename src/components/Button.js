import React from 'react'
import styled from 'styled-components';

function Button(props) {
  return (
    <ButtonContainer onClick={props.onClick}>
        {props.label}
    </ButtonContainer>
  )
}

export default Button

const ButtonContainer = styled.button`
  text-align: center;
  cursor:pointer;
  border: 0;
  width:100%;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 5px 13px -1px rgba(0,0,0,0.63);
  font-size: 25px;
  font-weight: bold;
  transition: all 250ms ease-out;
  
  &:hover {
    background-color: rgba(0, 0, 0,0.15);
  }
`