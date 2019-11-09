import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {

  render() {
    return (
      <div className="navbar">
        <div className="logo"/>
        <div className="menu_area">
          <div className="menu_text">关于饭团</div>
          <div className="menu_text">商家入驻</div>
          <div className="menu_text">美食资讯</div>
          <div className="menu_text">加入我们</div>
          <div className="english_button">ENGLISH</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
