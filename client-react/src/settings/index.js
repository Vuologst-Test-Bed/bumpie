import React, { Component } from "react";

import Header from "../common/Header";
import Footer from "../common/Footer";

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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            Hello Bumpie
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Settings;
