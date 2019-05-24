import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getUsersRequest} from '../actions/users';

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
    // const iterator = testing();
    // console.log(iterator.next());
    // console.log(iterator.next());
    // console.log(iterator.next());

  return (
     <div>
       Test
     </div>
    );
  }
}

export default connect(null, {
  getUsersRequest
})(App);
