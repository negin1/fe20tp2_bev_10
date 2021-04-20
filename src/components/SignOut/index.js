import React from 'react';

import styled from 'styled-components';




import { withFirebase } from '../Firebase';

 const Button = styled.div`

  text-decoration: none; 
   list-style: none; 
   font-family: Montserrat;
   font-weight: bold;
   font-size: 20px;
   color: black; 

        &:hover {
          cursor: pointer;
          color: darkgray;
          }
        &:active{
        font-weight:bold; 
      }

 `; 

const SignOutButton = ({ firebase }) => (

  <Button type="button" style={{ cursor: 'pointer' }} onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);