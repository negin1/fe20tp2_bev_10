import React, { Component } from 'react';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import { withAuthorization } from '../Session';
import * as ROLES from '../../constants/roles';
import styled from 'styled-components';


const StyledContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  padding-top:80px;
  
   h1{
      padding-bottom:40px;
      font-family: Montserrat;
      text-align: center; 
       text-shadow: 1px 1px #ffffff; 
   ;
    }
  span{
  display: block;
  font-family: Montserrat;
  font-size: 17px;
  letter-spacing: 2px;
  line-height:25px
  }
  li{
    margin:25px 0;
  
  }
  `

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }
  
  
  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

 

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

 

  render() {
    const { users, loading } = this.state;

    return (
      <StyledContainer>

        <h1>Admin</h1>

        {loading && <div>Loading ...</div>}

        <UserList users={users} />
      </StyledContainer>
    );
  }
}


 function deleteUser(e) {

 /*  users.auth().deleteUser(uid)
    .then(function() {
    console.log("Successfully deleted user");
    })
    .catch(function(error) {
    console.log("Error deleting user:", error);
    });  */

   console.log("hej") 
    /* const users =  Object.assign([], this.state.users);

    //Vi behöver sätta state någonst
     users.splice(1); 
       */
  } 
  
      
  
  

const UserList = ({ users }) => (

   
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
        <span>
         <button  onClick={deleteUser}>Delete user</button>
        </span>
      </li>
    ))}
  </ul>
);

const condition = authUser =>
  authUser && authUser.roles.includes(ROLES.ADMIN);

export default compose(
  withAuthorization(condition),
  withFirebase,
)(AdminPage);