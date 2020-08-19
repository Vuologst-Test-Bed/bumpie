import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import BumpieLogo from "./BumpieLogo.png";

const Nav = styled.nav`
  background-color: #8fe8df;
  margin: 0 auto;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;
const LinkBase = styled(Link)`
  font-family: Quicksand;
  font-size: 25px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
`;
const LinkRight = styled(LinkBase)`
  margin-right: 40px;
`;
const LinkPink = styled(LinkBase)`
  color: #ff4d4d;
`;
const Img = styled.img`
  height: auto;
  width: 30px;
`;

const Navbar = () => (
  <Nav>
    <div>
      <LinkRight>
        <Img src={BumpieLogo} alt="Bumpie Logo" />
      </LinkRight>
      <LinkRight to="/AboutUs">ABOUT US</LinkRight>
      <LinkRight to="/FAQ">FAQ</LinkRight>
    </div>
    <div>
      <LinkPink to="/SignIn">SIGN IN</LinkPink>
    </div>
  </Nav>
);

export default Navbar;
