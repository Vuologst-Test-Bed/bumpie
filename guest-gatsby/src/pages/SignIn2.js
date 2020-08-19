import React, { useState } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #c5c5c4;
`;
const AnimatedContentWrapper = styled(animated.div)`
  margin-top: 15vh;
  height: 50%;
  width: 80%;
  display: flex;
`;
const LeftContainer = styled.div`
  width: ${props => (props.SignIn ? "60%" : "40%")};
  background-color: #8fe8df;
  border-radius: 41px 0px 0px 41px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RightContainer = styled.div`
  width: ${props => (props.SignIn ? "40%" : "60%")};
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

const SignIn2 = () => {
  const [toggle, set] = useState(false);
  const transitions = useTransition(toggle, null, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <CenterContainer>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <AnimatedContentWrapper style={props}>
            <LeftContainer SignIn>
              align
              <Button onClick={() => set(!toggle)}>sign in</Button>
            </LeftContainer>
            <RightContainer>
              Fire
              <Button light onClick={() => set(!toggle)}>
                sign out
              </Button>
            </RightContainer>
          </AnimatedContentWrapper>
        ) : (
          <AnimatedContentWrapper style={props}>
            <LeftContainer>
              align
              <Button onClick={() => set(!toggle)}>sign in</Button>
            </LeftContainer>
            <RightContainer>
              Fire
              <Button light onClick={() => set(!toggle)}>
                sign out
              </Button>
            </RightContainer>
          </AnimatedContentWrapper>
        ),
      )}
    </CenterContainer>
  );
};

export default SignIn2;
