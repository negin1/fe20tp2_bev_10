import React from "react";
import Card from "./Card";

import styled from "styled-components";

const StyledDivCard = styled.div`
  display: flex;
  justify-content: center;
`;

const CovidSummary = (props) => {
  return (
    <div>
      <div>
        <h1>World wide Corona report</h1>

        <StyledDivCard>
          <Card>
            <span>Total confirmed</span>
            <br />
            <span>o</span>
          </Card>
          <Card>
            <span>Total Recovered</span>
            <br />
            <span>0</span>
          </Card>
          <Card>
            <span>Total Deaths</span>
            <br />
            <span>0</span>
          </Card>
        </StyledDivCard>
      </div>
    </div>
  );
};

export default CovidSummary;
