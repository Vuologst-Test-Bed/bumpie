import React from "react";
import styled, { keyframes } from "styled-components";
import { rubberBand, tada } from "react-animations";
import logo from "../assets/logo.png";
import user_icon from "../assets/user_icon.png";

const rubberAnimation = keyframes`${rubberBand}`;
const tadaAnimation = keyframes`${tada}`;

const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  align-items: center;
  background-color: #8fe8df;
  color: #ff4d4d;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const Link = styled.a`
  font-size: 25px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  justify-self: flex-start;
  margin-left: 70px;
`;

const Branding = styled.img`
  &:hover {
    animation: 2s ${rubberAnimation};
  }
  height: 50px;
  justify-self: center;
`;

const UserIcon = styled.img`
  &:hover {
    animation: 2s ${tadaAnimation};
  }
  height: 50px;
  justify-self: flex-end;
  margin-right: 70px;
`;

const Header = () => (
  <Container>
    <Link href="#">DASHBOARD</Link>
    <Branding src={logo} alt="logo" />
    <UserIcon src={user_icon} alt="user icon" />
  </Container>
);

export default Header;
