import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getUsersRequest} from '../actions/users';
import UsersList from './UsersList';

// function* testing(){
//   while (true){
//     yield 1;
//     yield 2;
//     yield 3;
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.props.getUsersRequest();
  }
  render() {
    const users = this.props.users;
    // const iterator = testing();
    // console.log(iterator.next());
    // console.log(iterator.next());
    // console.log(iterator.next());

  return (
     <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
       <UsersList users={users.items} />
     </div>
    );
  }
}

export default connect(({users}) => ({users}), {
  getUsersRequest
})(App);
