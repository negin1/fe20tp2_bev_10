import React from 'react';;
import styled from 'styled-components';

import { FirebaseContext } from '../Firebase';
/* import { LANDING } from '../../constants/routes'; */
import { findByLabelText } from '@testing-library/react';
import { LandingContainer, LandingContent, LandingH1 } from './LandingElements';


const LANDING = () => {
  return (
    <>
      <LandingContainer>
        <LandingContent>
          <LandingH1>Keep a track of the Corona virus statistics close to you and around the world.</LandingH1>
        </LandingContent>
      </LandingContainer>

    </>
  )
}

export default LANDING;





/* const LANDING = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      return
      <main>
        <img src={image} alt="Globe Picture" />
        <section>
          <h1>Keep track of Corona virus statistics close to you and around the world.</h1>
        </section>

      </main>
    }}
  </FirebaseContext.Consumer>
);
export default Landing;  */

