import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: #ffd217;
  justify-content: center;
  display: flex;
  align-items: center;
  color: #ff4d4d;
`;

const Footer = () => {
  return (
    <Container>
      © {new Date().getFullYear()} BUMPIE. All Rights Reserved.
    </Container>
  );
};

export default Footer;
