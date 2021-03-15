import React from "react";
import Card from "./Card";


import styled from "styled-components";
import NumberFormat from 'react-number-format'

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
        <h1 style={{textTransform: 'capitalize'}}>{country === '' ? 'World wide Corona Report' : country}</h1> {/* look at this later */}

        <StyledDivCard>
          <Card>
            <span>Total confirmed</span>
            <br />
            <span>
                  {<NumberFormat
                      value={totalConfirmed}
                      displayType={'text'}
                      thousandSeparator={true}
                  />}
              </span>
          </Card>
          <Card>
            <span>Total Recovered</span>
            <br />
            <span> 
              {
                <NumberFormat
                      value={totalRecovered}
                      displayType={'text'}
                      thousandSeparator={true}
                  />
              }
              </span>
          </Card>
          <Card>
            <span>Total Deaths</span>
            <br />
            <span>{
                <NumberFormat
                      value={totalDeaths}
                      displayType={'text'}
                      thousandSeparator={true}
                  />
              }</span>
          </Card>
        </StyledDivCard>
      </div>
    </div>
  );
};

export default CovidSummary;
