import React from 'react';
import { AuthUserContext } from '../Session';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorization } from '../Session';
import StyledForm from '../Styles/StyledForm';
import BottomNav from '../BottomNav';
import { PasswordForgetForm } from '../PasswordForget';


const AccountPage = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => (
        <StyledForm>
          <h1>Account: {authUser.email}</h1>
          {/*    <PasswordForgetForm /> */}
          <PasswordChangeForm />
        </StyledForm>
      )}
    </AuthUserContext.Consumer>
    <BottomNav />
  </div>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);