import React from "react";
import Switch from "react-switch";

const ToggleButton = ({ onChange, checked }) => {
  return (
    <Switch
      onChange={onChange}
      checked={checked}
      offColor="#8FE8DF"
      onColor="#2EC4B6"
      uncheckedIcon={false}
      checkedIcon={false}
    />
  );
};

export default ToggleButton;
