import React from "react";
import styled from "styled-components";
import "./DynamicButton.css";

const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const DynamicButton = ({ text, onclick, color, textCase, className }) => {
  let basicStyle = {
    textDecoration: "none"
  };

  return (
    <Button
      onClick={onclick}
      style={{
        ...basicStyle,
        ...{
          color: color,
          textTransform: textCase
        }
      }}
      className={className}
    >
      {text}
    </Button>
  );
};

export default DynamicButton;
