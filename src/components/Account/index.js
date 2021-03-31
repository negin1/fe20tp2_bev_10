import React from 'react';

import { AuthUserContext } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';
import styled from 'styled-components';
import StyledForm from '../Styles/StyledForm';



const AccountPage = () => (
  
  <AuthUserContext.Consumer>
    {authUser => (
      <StyledForm>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </StyledForm>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);