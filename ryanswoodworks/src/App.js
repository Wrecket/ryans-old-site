import React from 'react';
import './App.css';
import Built from './Components/Built/Built';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Mud from './Components/Mud/Mud';
import Nav from './Components/Nav/Nav';
import Services from './Components/Services/Services';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
        <Mud />
        {/* <Built /> */}
        {/* <Services /> */}
        <Footer />
      </div>
    );
  }
  
}

export default App;
