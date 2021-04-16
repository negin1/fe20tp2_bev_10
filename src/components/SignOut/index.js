import React from 'react';

import styled from 'styled-components';




import { withFirebase } from '../Firebase';

const Button = styled.div`

      color: white;
      background: black;
      border-radius: 20px;
      padding: 7px 7px;
      margin-top: -6px;
      font-size: 15px;
    
 `

const SignOutButton = ({ firebase }) => (

  <Button type="button" style={{ cursor: 'pointer' }} onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);