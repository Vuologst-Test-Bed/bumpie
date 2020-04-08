import React from "react";
import Button from "react-bootstrap/Button";

const DynamicButton = ({ text, onclick, variant, color, bgColor, textCase, disabled, borderRadius, padding }) => {
  let basicStyle = {
    textDecoration: "none"
  };

  return (
    <Button
      variant={variant}
      onClick={onclick}
      style={{ ...basicStyle, ...{ color: color, backgroundColor: bgColor, textTransform: textCase, borderRadius: borderRadius, padding: padding }}}
      disabled ={disabled}
    >
      {text}
    </Button>
  );
};

export default DynamicButton;
