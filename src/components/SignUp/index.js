import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import styled from 'styled-components'
import StyledForm from '../Styles/StyledForm';


const StyledLink = styled(Link)`
  color: black;
  font-weight: bold;
  font-size: 18px;
  z-index:888;
  padding-top:5px;
  
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 1em;
  border: .5px solid gray;
  border-radius: 10px;
  width: 200px; 
`;

const Label = styled.label`
  display:block;
  margin-top:5px;
  margin-left: 15px;
`;


const SignUpPage = () => (
  //<StyledForm>
  <SignUpForm />
  //</StyledForm>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne, isAdmin } = this.state;
    const roles = [];

    if (isAdmin) {
      roles.push(ROLES.ADMIN);
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
            roles,
          })
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
          })
          .catch(error => {
            this.setState({ error });
          });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAdmin,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <div>
        <h1>SignUp</h1>
        <h2>Please enter your details bellow.</h2>

        <form onSubmit={this.onSubmit}>
          <input
            name="username"
            value={username}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name"
          />
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password"
          />
          <Label>
            Admin:
          <input
              name="isAdmin"
              type="checkbox"
              checked={isAdmin}
              onChange={this.onChangeCheckbox}
            />
          </Label>
          <button disabled={isInvalid} type="submit">
            Sign Up
        </button>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const SignUpLink = () => (
  <StyledLink to={ROUTES.SIGN_UP}>Create a new account?</StyledLink>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };