import React, { useState } from "react";
import DynamicButton from "../common/DynamicButton";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RadButton = styled(DynamicButton)`
  background-color: ${props => (props.yak ? "black" : "blue")};
  color: white;
  border-radius: 16px;
  padding: 6px 40px 6px 40px;
`;

const RadioButton = () => {
  const [monthlyButton, setMonthlyButton] = useState(false);
  const [quarterlyButton, setQuarterlyButton] = useState(false);
  const [biweeklyButton, setBiweeklyButton] = useState(false);
  const [yearlyButton, setYearlyButton] = useState(false);
  return (
    <Main>
      <RadButton
        text="bi-weekly"
        onClick={() => {
          setBiweeklyButton(!biweeklyButton);
        }}
        yak={biweeklyButton ? true : false}
      />
      <RadButton
        text="monthly"
        onClick={() => setBiweeklyButton(!biweeklyButton)}
      />
      <RadButton
        text="quarterly"
        onClick={() => setQuarterlyButton(!quarterlyButton)}
      />
      <RadButton text="yearly" onClick={() => setYearlyButton(!yearlyButton)} />
    </Main>
  );
};

export default RadioButton;
