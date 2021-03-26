import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import styled from 'styled-components'
//import { Happy } from '../Styles/globalStyle';


const StyledContainer= styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  padding-top:130px;
`

const StyledH1= styled.h1`
 padding-bottom:15px;
  font-family: Montserrat;
  text-align: center;
 `;
const StyledH2= styled.h2`
  font-size:18px;
  font-family: Montserrat;
    text-align: center;
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
const StyledLink= styled(Link)`
  color: black;
  font-weight: bold;
  font-size: 18px;
 
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 1em;
  border: .5px solid gray;
  border-radius: 10px;
`;

const Label = styled.label`
  display:block;
  margin-top:5px;
  margin-left: 15px;

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

const SignUpPage = () => (
   <StyledContainer>
  
    <SignUpForm />
  </StyledContainer>
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
       <FormGroup>
         <StyledH1>SignUp</StyledH1>
       <StyledH2>Please enter your details bellow.</StyledH2>
      
      <form onSubmit={this.onSubmit}>
        <Input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <Input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <Input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <Input
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
    <StyledBbutton disabled={isInvalid} type="submit">
          Sign Up
        </StyledBbutton> 

        {error && <p>{error.message}</p>}
      </form>
      </FormGroup>
    );
  }
}

const SignUpLink = () => (
  
    <StyledLink to={ROUTES.SIGN_UP}>Create a new account? </StyledLink>

);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };