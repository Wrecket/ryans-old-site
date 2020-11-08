import React from 'react';
import './App.css';
import Built from './Components/Built/Built';
import Fence from './Components/Fence/Fence';
import Fence2 from './Components/Fence2/Fence2';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Mud from './Components/Mud/Mud';
import Nav from './Components/Nav/Nav';
import Other from './Components/Other/Other';
import Services from './Components/Services/Services';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
        <Mud />
        <Fence />
        <Built />
        <Fence2 />
        <Other />
        <Fence2 />
        {/* <Services /> */}
        <Footer />
      </div>
    );
  }
  
}

export default App;
