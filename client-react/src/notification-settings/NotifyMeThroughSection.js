import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Auth, API } from "aws-amplify";

import ToggleButton from "../common/ToggleButton";
import SettingsSectionHeader from "../common/SettingsSectionHeader";

const Email = styled.span`
  font-size: 25px;
  color: #989293;
`;

const NotifyMeThroughSection = () => {
  const [email, setEmail] = useState("");
  const [emailNotification, setEmailToggle] = useState(false);

  useEffect(() => {
    async function fetchEmail() {
      const { attributes } = await Auth.currentAuthenticatedUser();
      setEmail(attributes.email);
    }
    async function fetchFrequency() {
      const response = await API.get("data", "/notification");
      if (response.frequency === "none") setEmailToggle(false);
      else setEmailToggle(true);
    }
    // eslint-disable-next-line
    fetchEmail();
    fetchFrequency();
  }, []);

  return (
    <>
      <SettingsSectionHeader title="Notify me through..." />
      <label style={{ display: "flex", justifyContent: "space-between" }}>
        <Email>{email}</Email>
        <ToggleButton
          onChange={() => setEmailToggle(!emailNotification)}
          checked={emailNotification}
        />
      </label>
    </>
  );
};

export default NotifyMeThroughSection;
