import React from "react";
import styled from "styled-components";

import { device } from "./MediaBreakpoints";

const Line = styled.hr`
  @media ${device.mobileM} {
    display: none;
  }
`;

const SettingsSectionHeader = ({ title }) => (
  <>
    <h3>{title}</h3>
    <Line />
  </>
);

export default SettingsSectionHeader;
