import React, { useState } from 'react';
import { LandingContainer, LandingContent, Landingh1, BtnRoute, LandingBtn, ForwardIcon } from './LandingElement';
import LandingCovidSummary from '../CovidTracker/CovidSummary'
/* import { FirebaseContext } from '../Firebase'; */

const Landing = () => {

  const [hover, setHover] = useState(false);

  const toggleIcon = () => {
    setHover(!hover);
  }
  return (
    <>
      <LandingContainer>
        <LandingContent class="grid-container">
          <Landingh1>Keep track of Corona Virus Statistics close to you and around the world.</Landingh1>
          <BtnRoute>
            <LandingBtn to="/signin"
              onMouseEnter={toggleIcon}
              onMouseLeave={toggleIcon}>Get Started
            {hover ? <ForwardIcon className="arr-icon" /> : null}
            </LandingBtn>
          </BtnRoute>
          <LandingCovidSummary>
            <h1>Global Summary Covid19.</h1>
          </LandingCovidSummary>
        </LandingContent>
      </LandingContainer>
      <h1></h1>
    </>
  );

};
export default Landing;