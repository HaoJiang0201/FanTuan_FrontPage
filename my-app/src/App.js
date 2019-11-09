import React, { Component } from 'react';
import './App.css';
import Navbar from './Top/Navbar';
import Advertise from './Top/Advertise';
import BodyArea0 from './Body/BodyArea0';
import BodyArea1 from './Body/BodyArea1';
import BodyArea2 from './Body/BodyArea2';
import BottomArea from './Bottom/BottomArea';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Advertise />
        <BodyArea0 />
        <BodyArea1 />
        <BodyArea2 />
        <BottomArea />
      </div>
    );
  }
}

export default App;
