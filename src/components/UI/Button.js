import React from "react";
import styled from "styled-components";
export const Button = (props) => {
  console.log(props);
  return (
    <AllButton  onClick={props.onClick}>
      {props.children}
    </AllButton>
  );
};
const AllButton = styled.button`
  height: 45px;
    border-radius: 10px;
    border: 0;
    background-color:#4A026B;
    color: #FFFFFF;
    margin-top: 70px;
    font-size: 16px;
    margin-left: 30px;
    padding: 15px;
    &:hover{
      transition: 0.5s;
    background-color: white;
    color: #4A026B;
    }
`