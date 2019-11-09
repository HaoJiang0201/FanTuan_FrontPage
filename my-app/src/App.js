import React, { Component } from 'react';
import './App.css';
import Navbar from './TopArea/Navbar';
import Advertise from './TopArea/Advertise';
import BodyArea0 from './BodyArea/BodyArea0';
import BodyArea1 from './BodyArea/BodyArea1';
import BodyArea2 from './BodyArea/BodyArea2';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Advertise />
        <BodyArea0 />
        {/* <BodyArea1 />
        <BodyArea2 /> */}
      </div>
    );
  }
}

export default App;
