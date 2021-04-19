import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Auth } from "aws-amplify";

import SettingsSectionHeader from "../common/SettingsSectionHeader";
import DynamicButton from "../common/DynamicButton";

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
  background-color: ${(props) => (props.bgColor ? "#2EC4B6" : "#8FE8DF")};
  color: white;
  border-radius: 16px;
  padding: 6px 40px 6px 40px;
  @media (max-width: 1036px) {
    margin: 5px;
    padding: 6px 5px 6px 5px;
  }
`;

const NotifyMeFrequencySection = () => {
  const [radioSet, setRadioSet] = useState([true, false, false, false]);

  const radioClick = (index) => {
    setRadioSet(
      radioSet.map((x, i) => {
        if (index !== i) {
          x = false;
        } else {
          x = true;
        }
        return x;
      })
    );
  };

  return (
    <>
      <SettingsSectionHeader title="Notify me..." />
      <div style={{ marginTop: 30 }}>
        <Main>
          <RadButton
            text="bi-weekly"
            onClick={() => radioClick(0)}
            bgColor={radioSet[0] ? true : false}
          />
          <RadButton
            text="monthly"
            onClick={() => radioClick(1)}
            bgColor={radioSet[1] ? true : false}
          />
          <RadButton
            text="quarterly"
            onClick={() => radioClick(2)}
            bgColor={radioSet[2] ? true : false}
          />
          <RadButton
            text="yearly"
            onClick={() => radioClick(3)}
            bgColor={radioSet[3] ? true : false}
          />
        </Main>
      </div>
    </>
  );
};

export default NotifyMeFrequencySection;
