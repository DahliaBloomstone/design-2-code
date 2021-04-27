import React from "react";
import styled from "styled-components";

const HeroText = () => {
  return (
    <Container>
      <h5>Consider Donating Today.</h5>
      <h1>Charity.</h1>
      <h1>Mutual Aid.</h1>
      <h1>Philanthropy.</h1>
      <h1>We Care.</h1>
      <BtnContainer>
        <button className="readmore">Read More</button>
        <button>Monthly Subscription</button>
      </BtnContainer>
    </Container>
  );
};

const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background: #81d1ff;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #81d1ff;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }
  .readmore {
    color: #81d1ff;
    background: transparent;
    border: 3px solid #81d1ff;
    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
  h5 {
    color:#1da1de;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 900;
    &:nth-of-type(1) {
      color: #f5b3e9;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      color: #f288df;
    }
    &:nth-of-type(3) {
      color: #ed47cf;
    }
    &:nth-of-type(4) {
      color: #cf08ab;
    }
  }
`;

export default HeroText;