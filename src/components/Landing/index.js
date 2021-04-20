import React, { useState } from 'react';
import { LandingContainer, LandingContent, Landingh1, BtnRoute, LandingBtn, ForwardIcon } from './LandingElement';
import LandingCovidSummary from '../CovidTracker/CovidSummary'
/* import { FirebaseContext } from '../Firebase'; */
import FetchCards from './FetchCards'
import Cards from './Cards'

const Landing = () => {

  const [hover, setHover] = useState(false);

  const toggleIcon = () => {
    setHover(!hover);
  }

  return (
    <>
      <LandingContainer>
        <LandingContent className="grid-container">
          <Landingh1>Keep track of Corona Virus Statistics close to you and around the world.</Landingh1>
          <BtnRoute>
            <LandingBtn to="/signin"
              onMouseEnter={toggleIcon}
              onMouseLeave={toggleIcon}>Get Started
            {hover ? <ForwardIcon className="arr-icon" /> : null}
            </LandingBtn>
          </BtnRoute>
        </LandingContent>
      </LandingContainer>
      <br></br>
      <FetchCards />
      {/*<LandingCovidSummary />*/}
    </>
  );

};
export default Landing;

