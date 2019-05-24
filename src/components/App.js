import React, {Component} from 'react';
import './App.css';

function* testing(){
  yield 1;
  yield 2;
  yield 3;
}

class App extends Component {
  render() {
    const iterator = testing();
    console.log(iterator.next());
  return (
     <div>
       Test
     </div>
    );
  }
}

export default App;
