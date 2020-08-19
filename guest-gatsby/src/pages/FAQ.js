import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";

const Q = styled.h3`
  font-family: "Quicksand";
  font-size: 35px;
  color: #fff;
  font-weight: bold;
  background-color: #8fe8df;
  border-left-style: solid;
  border-left-color: black;
  border-left-width: 5px;
  margin-top: 70px;
  padding-left: 5px;
`;
const A = styled.p`
  font-family: "Quicksand";
  font-size: 35px;
  font-weight: bold;
  border-left-style: solid;
  border-left-color: #8fe8df;
  border-left-width: 5px;
  padding-left: 5px;
`;

const FAQitem = () => (
  <div>
    <Q>Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Q>
    <A>
      A: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi
      elit, porttitor vel erat eget, dignissim dignissim nisl. Cras quis
      vulputate sapien. Sed rhoncus risus at quam efficitur, vel elementum.
    </A>
  </div>
);

const FAQ = () => (
  <Layout>
    <div style={{ margin: "70px 0px" }}>
      <h1 style={{ fontFamily: "Quicksand", fontWeight: "bold", fontSize: 55 }}>
        Frequently Asked Questions
      </h1>
      <FAQitem />
      <FAQitem />
      <FAQitem />
      <FAQitem />
      <FAQitem />
    </div>
  </Layout>
);

export default FAQ;
