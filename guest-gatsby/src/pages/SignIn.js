import React, { useState } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

import Layout from "../components/layout";
import GoogleSignInDarkNormalWeb2x from "./GoogleSignInDarkNormalWeb2x.png";
import Polygon from "./Polygon.png";
import SignInPolygon from "../images/SignInPolygon.svg";
import { PassThrough } from "stream";

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #c5c5c4;
`;
const ContentWrapper = styled.div`
  margin-top: 15vh;
  height: 50%;
  width: 80%;
  display: flex;
`;
const LeftContainer = styled.div`
  width: 60%;
  background-color: #8fe8df;
  border-radius: 41px 0px 0px 41px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${Polygon});
`;
const RightContainer = styled.div`
  width: 40%;
  background-color: #005a52;
  border-radius: 0px 41px 41px 0px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 400px;
  height: 75px;
  background-color: ${props => (props.light ? "#d0e6e3" : "#146058")};
  color: ${props => (props.light ? "#005A52" : "#fff")};
  font-family: "Roboto";
  font-size: 25px;
  border-radius: 37px;
  border: 1px solid transparent;
  cursor: pointer;
`;
const Input = styled.input`
  width: 425px;
  height: 25px;
  margin-bottom: 20px;
  border-radius: 12px;
  border: 1px solid transparent;
  padding: 10px;
`;

const pages = [<animated.div>a</animated.div>];

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [showSignUp, setSignUpToggle] = useState(false);
  // const transition = useTransition(pages, item => item.key, {
  //   enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
  //   leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  // });

  return (
    <CenterContainer>
      <ContentWrapper>
        <LeftContainer>
          <h1
            style={{
              fontFamily: "Quicksand",
              fontSize: 50,
              fontWeight: "bold",
              marginBottom: 30,
            }}
          >
            Sign In
          </h1>
          <img
            style={{ width: 250, marginBottom: 30 }}
            src={GoogleSignInDarkNormalWeb2x}
            alt="google login"
          />
          <form>
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <br />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </form>
          <a
            style={{
              fontFamily: "Roboto",
              fontSize: 25,
              cursor: "pointer",
              marginBottom: 30,
            }}
          >
            I forgot my password
          </a>
          <Button>SIGN IN</Button>
        </LeftContainer>
        <RightContainer>
          <h1
            style={{
              color: "white",
              fontFamily: "Quicksand",
              fontSize: 55,
              fontWeight: "bold",
              marginBottom: 100,
            }}
          >
            Welcome!
          </h1>
          <p
            style={{
              color: "white",
              fontFamily: "Roboto",
              fontSize: 25,
              marginBottom: 100,
              textAlign: "center",
            }}
          >
            Don't have an account? <br /> Join today, it's free and easy!
          </p>
          <Button light>SIGN UP</Button>
        </RightContainer>
      </ContentWrapper>
    </CenterContainer>
  );
};

export default SignIn;
