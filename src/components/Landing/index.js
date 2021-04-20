import React, { useState, useEffect } from 'react';
import { LandingContainer, LandingContent, Landingh1, BtnRoute, LandingBtn, ForwardIcon } from './LandingElement';
import LandingCovidSummary from '../CovidTracker/CovidSummary'
import Popup from './Popup';


const Landing = () => {
  const [timedPopup, setTimedPopup] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 1000);
  }, []);

  const toggleIcon = () => {
    setHover(!hover);
  }
  return (
    <>
      <Popup trigger={timedPopup} setTrigger={setTimedPopup} >
        <h3>Welcome to the ultimate Covid-19 tracker!</h3>
        <p>Here you will be able to get live data about Covid-19 and how it has affected different parts of the world.</p>
        <p>You will also be able to save that data and compare it with other types of data or dates.</p>
        <p>We hope you find this application useful and if you have any inquiries or suggestions feel free to contact us at covidtracker@gmail.com</p>
      </Popup>
      <Landingh1>Keep track of Corona Virus Statistics close to you and around the world.</Landingh1>
      <LandingContainer>
        <LandingContent className="grid-container">
          <BtnRoute>
            <LandingBtn to="/signin"
              onMouseEnter={toggleIcon}
              onMouseLeave={toggleIcon}>Get Started
            {hover ? <ForwardIcon className="arr-icon" /> : null}
            </LandingBtn>
          </BtnRoute>
        </LandingContent>
      </LandingContainer>
      <LandingCovidSummary />
    </>
  );

};
export default Landing;

