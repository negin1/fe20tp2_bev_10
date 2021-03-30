import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import styled from 'styled-components'

const StyledContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  padding-top:130px
`
const StyledH1 = styled.h1`
padding-bottom:15px;
  font-family: Montserrat;
  text-align: center;
 `;

const StyledH2 = styled.h2`
  font-size:18px;
  font-family: Montserrat;
  padding-bottom:18px
  text-align: center; 
 `;

const StyledBbutton = styled.button`
  display: block;
  padding: 0.5em;
  margin:  20px;
  color: white;
  background: black;
  border: none;
  border-radius: 20px;
  width: 120px;
  height: 40px;
`;

const FormGroup = styled.div`
	width: 300px;
  justify-content: center;
  padding: 50px 50px;
  border-radius: 30px;
  background: white;

  form {
    display: flex; 
    flex-direction: column; 
    align-content: center; 
    align-items: center; 
  }
`;

const Input = styled.input`
  padding: 1em;
  border: .5px solid gray;
  border-radius: 10px;
  width: 200px; 
`;

const StyledP = styled.p`

a {
  color: black;
  font-weight: bold;
  font-size: 18px;
}
`;

const PasswordForgetPage = () => (
  <StyledContainer>
    <PasswordForgetForm />
  </StyledContainer>
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
        <FormGroup>
          <StyledH1>Reset your password </StyledH1>
          <StyledH2> Please enter your email adress below and we will send you a new password. </StyledH2>
          <form onSubmit={this.onSubmit}>
            <Input
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <StyledBbutton disabled={isInvalid} type="submit">
              Reset Password
            </StyledBbutton>

            {error && <p>{error.message}</p>}
          </form>
        </FormGroup>
      </>
    );
  }
}

const PasswordForgetLink = () => (
  <StyledP>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </StyledP>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };