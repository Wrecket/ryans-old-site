import React from 'react';
import './App.css';
import Main from './Components/Main/Main';
import Mud from './Components/Mud/Mud';
import Nav from './Components/Nav/Nav';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
      </div>
    );
  }
  
}

export default App;
