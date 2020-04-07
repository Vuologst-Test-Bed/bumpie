import React, { useState } from "react";

import Header from "../common/Header";
import Footer from "../common/Footer";
import DynamicButton from "../common/DynamicButton";
import ToggleButton from "../common/ToggleButton";

const Settings = () => {
  const [emailNotification, setEmailToggle] = useState(false);
  const [phoneNotification, setPhoneToggle] = useState(false);

  return (
    <>
      <Header />
      <div
        style={{
          maxWidth: 1920,
          margin: "auto",
          paddingTop: 100,
          paddingLeft: "15%",
          paddingRight: "15%",
        }}
      >
        <h2
          style={{
            fontSize: 35,
          }}
        >
          Notification Settings
        </h2>
        <div
          style={{
            padding: 100,
          }}
        >
          <div>
            <h3>Notify me through...</h3>
            <hr />
            <label style={{ display: "flex", justifyContent: "space-between" }}>
              <span>email@email.com</span>
              <ToggleButton
                onChange={() => setEmailToggle(!emailNotification)}
                checked={emailNotification}
              />
            </label>
            <br />
            <label style={{ display: "flex", justifyContent: "space-between" }}>
              <span>(123)456-7890</span>
              <ToggleButton
                onChange={() => setPhoneToggle(!phoneNotification)}
                checked={phoneNotification}
              />
            </label>
          </div>
          {/* start of reset and save button grouping TODO -- Move to div that will surround the page */}
          <DynamicButton
            text="save"
            onclick="save"
            variant="link"
            color="black"
          />
          <DynamicButton
            text="reset"
            onclick="reset"
            variant="link"
            color="black"
          />
        </div>
        {/* end of reset and save button grouping...*/}
      </div>
      <Footer />
    </>
  );
};

export default Settings;
