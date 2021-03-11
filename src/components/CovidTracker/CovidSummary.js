import React from "react";
import Card from "./Card";

import styled from "styled-components";

const StyledDivCard = styled.div`
  display: flex;
  justify-content: center;
`;

const CovidSummary = (props) => {

  const {
    totalConfirmed,
    totalRecovered,
    totalDeaths,
    country,
  } = props;

  return (
    <div>
      <div>
        <h1>{country === '' ? 'World wide Corona Report' : country}</h1> {/* look at this later */}

        <StyledDivCard>
          <Card>
            <span>Total confirmed</span>
            <br />
            <span>{totalConfirmed}</span>
          </Card>
          <Card>
            <span>Total Recovered</span>
            <br />
            <span>{totalRecovered}</span>
          </Card>
          <Card>
            <span>Total Deaths</span>
            <br />
            <span>{totalDeaths}</span>
          </Card>
        </StyledDivCard>
      </div>
    </div>
  );
};

export default CovidSummary;
