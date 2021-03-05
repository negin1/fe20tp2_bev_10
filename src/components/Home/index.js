import React from 'react';
import Covid from '../Covid/Covid'



import { withAuthorization } from '../Session';
import { fromRenderProps } from 'recompose';

const HomePage = () => (
  <div>
    <h1>COVID-19 Tracker</h1>
    
    <Covid/>
 
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);