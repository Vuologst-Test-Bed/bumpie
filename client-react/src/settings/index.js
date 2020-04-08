import React, { Component } from "react";

import Header from "../common/Header";
import Footer from "../common/Footer";
import DynamicButton from "../common/DynamicButton";
import RadioButton from "../settings/RadioButton";

class Settings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <div
          style={{
            maxWidth: 1920,
            margin: "auto",
          }}
        >

          {/*start of radio button */}
          <div style={{marginLeft: "25%", marginRight: "25%", marginTop: "2%"}}>
          <h4>Notify Me...</h4>
          <hr/>
          <RadioButton />


          {/* start of reset and save button grouping TODO -- Move to div that will surround the page */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignContent: "center",
              marginTop: "5%"
            }}
          >
            <DynamicButton
              text="save"
              onclick="save"
              variant="link"
              color="black"
              textCase="uppercase"
            />
            <DynamicButton
              text="reset"
              onclick="reset"
              variant="link"
              color="black"
              textCase="uppercase"
            />
          </div>
          {/* end of reset and save button grouping...*/}

          </div>
          {/*end of radio button */}


        </div>
        <Footer />
      </>
    );
  }
}

export default Settings;
