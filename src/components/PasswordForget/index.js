import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import styled from 'styled-components'
import StyledForm from '../Styles/StyledForm';





const StyledH1 = styled.h1`


 `
const StyledLink = styled(Link)`
  color: black;
  font-weight: bold;
  font-size: 18px;
  padding:10px;
`;

const PasswordForgetPage = () => (
  <StyledForm>
    <PasswordForgetForm />
  </StyledForm>
);
const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <>
        <div>
          <StyledH1>Reset your password </StyledH1>
          <h2> Please enter your email adress bellow </h2>
          <form onSubmit={this.onSubmit}>
            <input
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <button disabled={isInvalid} type="submit" style={{ cursor: 'pointer' }} >
              Reset Password
        </button>

            {error && <p>{error.message}</p>}
          </form>
        </div>
      </>
    );
  }
}

 const PasswordForgetLink = () => (
  <StyledLink to={ROUTES.PASSWORD_FORGET}>Forgot Password?</StyledLink>
); 

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };