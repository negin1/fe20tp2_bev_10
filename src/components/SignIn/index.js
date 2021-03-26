import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import styled from 'styled-components'

const StyledContainer= styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  padding-top:130px;
`
const StyledH1= styled.h1`
 padding-bottom:40px;
 `;

const StyledH2= styled.h2`
  font-size:18px;
  font-family: Montserrat;
  padding-bottom:18px
 ` ;

const FormGroup= styled.div`
  display: block;
	width: 300px;
  justify-content: center;
  padding: 50px 50px;
  border-radius: 30px;
  background: white; 

`;

const Input = styled.input`
  padding: 1em;
  margin: 1em;
  border: .5px solid gray;
  border-radius: 10px;
`;

const StyledBbutton = styled.button`
display: block;
  padding: 0.5em;
  margin:  0 auto;
  color: white;
  background: black;
  border: none;
  border-radius: 20px;
  width: 120px;
  height: 40px;
`;

const SignInPage = () => (
 
  <StyledContainer>
    <StyledH1>Sign in</StyledH1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
 </StyledContainer>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
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
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <> 
       <FormGroup>
       <StyledH2>Enter your full name and email </StyledH2>
      <form onSubmit={this.onSubmit}>
        <Input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <Input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <StyledBbutton disabled={isInvalid} type="submit">
          Sign In
        </StyledBbutton>
        

        {error && <p>{error.message}</p>}
      </form>
      
      </FormGroup>
</>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;


export { SignInForm };