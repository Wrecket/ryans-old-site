import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Mud from './Components/Mud/Mud';
import Nav from './Components/Nav/Nav';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
        <Mud />
        <Footer />
      </div>
    );
  }
  
}

export default App;
