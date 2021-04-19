import React from "react";
import styled from "styled-components";

import { device } from "../common/MediaBreakpoints";
import NotifyMeThroughSection from "./NotifyMeThroughSection";
import NotifyMeFrequencySection from "./NotifyMeFrequencySection";

const PageTitle = styled.h2`
  font-size: 35px;
  font-weight: normal;

  @media ${device.mobileM} {
    display: none;
  }
`;

const Wrapper = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  padding-top: 75px;
`;

const NotificationSettings = () => {
  return (
    <Wrapper>
      <PageTitle>Notification Settings</PageTitle>
      <div style={{ margin: 80 }}>
        <NotifyMeThroughSection />
        <div style={{ marginTop: 70 }}>
          <NotifyMeFrequencySection />
        </div>
      </div>
    </Wrapper>
  );
};

export default NotificationSettings;
