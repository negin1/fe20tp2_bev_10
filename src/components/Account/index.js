import React from 'react';
import { AuthUserContext } from '../Session';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';
import StyledForm from '../Styles/StyledForm';



const AccountPage = () => (

  <AuthUserContext.Consumer>
    {authUser => (
      <StyledForm>
        <h1>Account: {authUser.email}</h1>

        <PasswordChangeForm />
      </StyledForm>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);