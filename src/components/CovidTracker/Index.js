import React from "react";
import styled from "styled-components";
import LineGraph from "./LineGraph";
import Card from "./Card";
import CovidSummary from "./CovidSummary";

const StyledDiv = styled.div`
  text-align: center;
`;

function CovidTracker() {
  return (
    <StyledDiv>
      <CovidSummary />
      <LineGraph />
    </StyledDiv>
  );
}

export default CovidTracker;
