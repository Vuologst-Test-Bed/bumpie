import React from "react";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import Slider from "rc-slider";
import { slideOutUp, slideInDown } from "react-animations";
import "rc-slider/assets/index.css";

const slideOutUpAnimation = keyframes`${slideOutUp}`;
const slideInDownAnimation = keyframes`${slideInDown}`;

const outAnimation = css`
  animation: 1s ${slideOutUpAnimation};
`;
const slideInAnimation = css`
  animation: 1s ${slideInDownAnimation};
`;

const SubcategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  ${(props) => (props.animate ? outAnimation : slideInAnimation)};
`;
const SubcategoryTitle = styled.p`
  color: ${(props) => (props.one ? "#a6a6a6" : "black")};
  font-size: 12pt;
  margin-bottom: 0px;
  margin-top: -6px;
`;
const GridDiv = styled.div`
  margin-top: 15px;
  &:last-child {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
  }
`;
const Divider = styled.hr`
  margin-top: 20px;
  margi-bottom: 20px;
`;

const SubCategory = ({ title, one, animation }) => {
  return (
    <>
      <SubcategoryWrapper animate={animation}>
        <GridDiv>
          <SubcategoryTitle one={one}>{title}</SubcategoryTitle>
        </GridDiv>
        <GridDiv>
          <Slider
            railStyle={{
              height: 2,
            }}
            handleStyle={{
              height: 28,
              width: 28,
              marginLeft: -14,
              marginTop: -14,
              backgroundColor: "white",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              border: 0,
            }}
            trackStyle={{
              backgroundColor: "#707070",
            }}
          />
        </GridDiv>
        <GridDiv>
          <FontAwesomeIcon icon={faMinusCircle} size="lg" color="#2EC4B6" />
        </GridDiv>
      </SubcategoryWrapper>
      <Divider />
    </>
  );
};

export default SubCategory;