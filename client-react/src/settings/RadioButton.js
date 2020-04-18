import React, { useState } from "react";
import DynamicButton from "../common/DynamicButton";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1036px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
  }
`;

const RadButton = styled(DynamicButton)`
  background-color: ${props => (props.color ? "#2EC4B6" : "#8FE8DF")};
  color: white;
  border-radius: 16px;
  padding: 6px 40px 6px 40px;
  @media (max-width: 1036px) {
    margin: 5px;
    padding: 6px 5px 6px 5px;
  }
`;

const RadioButton = () => {
  const [radioSet, setRadioSet] = useState([true, false, false, false]);

  const radioClick = index => {
    setRadioSet(
      radioSet.map((x, i) => {
        if (index != i) {
          x = false;
        } else {
          x = true;
        }
        return x;
      })
    );
  };

  return (
    <Main>
      <RadButton
        text="bi-weekly"
        onClick={() => radioClick(0)}
        color={radioSet[0] ? true : false}
      />
      <RadButton
        text="monthly"
        onClick={() => radioClick(1)}
        color={radioSet[1] ? true : false}
      />
      <RadButton
        text="quarterly"
        onClick={() => radioClick(2)}
        color={radioSet[2] ? true : false}
      />
      <RadButton
        text="yearly"
        onClick={() => radioClick(3)}
        color={radioSet[3] ? true : false}
      />
    </Main>
  );
};

export default RadioButton;
