import React from "react";
import Routes from "./Routes";
import styled from "styled-components";

import Header from "./common/Header";
import Footer from "./common/Footer";

const Site = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const App = () => {
  const pathname = window.location.pathname;
  return (
    <Site>
      {pathname === "/sign-in" ? "" : <Header />}
      <Routes />
      {pathname === "/sign-in" ? "" : <Footer />}
    </Site>
  );
};

export default App;
