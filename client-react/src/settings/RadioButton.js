import React, { Component } from "react";
import DynamicButton from "../common/DynamicButton";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: space-between;
`
class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {disabled: false};
  }

  handleRadio() {
    this.setState({disabled: true});
    console.log(this.state.disabled)
  }

  render() {
    return (
      <Main>
        <DynamicButton text="bi-weekly" variant="light" textCase="lowercase" onClick={this.handleRadio} disabled={this.state.disabled} bgColor="#2EC4B6" color="white" borderRadius="16px" padding="6px 40px 6px 40px"/>
        <DynamicButton text="monthly" variant="light" disabled={this.state.disabled} bgColor="#2EC4B6" color="white" borderRadius="16px" padding="6px 40px 6px 40px"/>
        <DynamicButton text="quarterly" variant="light" disabled={this.state.disabled} bgColor="#2EC4B6" color="white" borderRadius="16px" padding="6px 40px 6px 40px"/>
        <DynamicButton text="yearly" variant="light" disabled={this.state.disabled} bgColor="#2EC4B6" color="white" borderRadius="16px" padding="6px 40px 6px 40px"/>
      </Main>
    );
  }
};

export default RadioButton;
