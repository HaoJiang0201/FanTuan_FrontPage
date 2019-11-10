import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      iMenuSelect: 0,  // 当前被选中的菜单ID
      bMenuFoldOpen: false  // 折叠菜单的状态：打开/收起
    }
    this.strMenuTextNormalStyle = "menu_text";
    this.strMenuTextSelectStyle = "menu_text_select";
    this.strMenuFoldStyle = "menu_fold";
    this.strMenuFoldTextStyle = "menu_fold_text"
    this.strEnglishButtonStyle = "english_button";
    this.arrMenuButton = [
      {
        name:"关于饭团",
        style: this.strMenuTextSelectStyle
      },
      {
        name:"商家入驻",
        style: this.strMenuTextNormalStyle
      },
      {
        name:"美食资讯",
        style:  this.strMenuTextNormalStyle
      },
      {
        name:"加入我们",
        style:  this.strMenuTextNormalStyle
      },
      {
        name:"ENGLISH",
        style:  this.strEnglishButtonStyle
      }
    ];
    this.bMenuFoldOpened = false;  // 当前折叠菜单是否已经打开，只做监控，不做this.state设置
  }

  // 菜单按钮被点击
  MenuSwitch = (iMenuID) => {
    console.log("点击了第" + iMenuID + "个菜单按钮");
    this.bMenuFoldOpened = false;
    this.setState({
      ...this.state,
      iMenuSelect: iMenuID
    });
  }
  
  // 获取当前菜单按钮的状态
  GetMenuAreaState(){
    let arrButton = [];
    for(let i = 0; i<this.arrMenuButton.length-1; i ++){
      this.arrMenuButton[i].style = this.strMenuTextNormalStyle;
      if(this.state.iMenuSelect === i)
        this.arrMenuButton[i].style = this.strMenuTextSelectStyle;
      arrButton[i] = (
        <div className={this.arrMenuButton[i].style}  onClick={this.MenuSwitch.bind(this, i)}>
          {this.arrMenuButton[i].name}
        </div>
      );
    }
    // 生成并返回当前菜单栏按钮区域
    return (
      <div className="menu_area">
        {arrButton[0]}
        {arrButton[1]}
        {arrButton[2]}
        {arrButton[3]}
        <div className={this.strEnglishButtonStyle} onClick={this.MenuSwitch.bind(this, 4)}>
          {this.arrMenuButton[4].name}
        </div>
      </div>
    );
  }

  // 获取折叠菜单按钮的状态
  GetFoldMenuState () {
    // 如果菜单处于未打开状况，
    if(!this.bMenuFoldOpened) {
      return (
        <div className="menu_fold_button" onClick={this.MenuFoldButtonClick.bind(this)}>
          <div className="fold_button_line" />
          <div className="fold_button_line" />
          <div className="fold_button_line" />
        </div>
      );
    }
    // 点击折叠菜单按钮得到的反馈
    if(this.state.bMenuFoldOpen) {
      let arrButton = [];
      for(let i = 0; i<this.arrMenuButton.length; i ++){
        this.arrMenuButton[i].style = this.strMenuFoldTextStyle;
        arrButton[i] = (
          <div className={this.arrMenuButton[i].style} onClick={this.MenuSwitch.bind(this, i)} >
            {this.arrMenuButton[i].name}
          </div>
        );
      }
      return (
        <div>
          <div className="menu_fold_button" onClick={this.MenuFoldButtonClick.bind(this)}>
            <div className="fold_button_line" />
            <div className="fold_button_line" />
            <div className="fold_button_line" />
          </div>
          <div className="menu_fold_area">
            {arrButton[0]}
            {arrButton[1]}
            {arrButton[2]}
            {arrButton[3]}
            {arrButton[4]}
          </div>
        </div>
      );
    } else {
      return (
        <div className="menu_fold_button" onClick={this.MenuFoldButtonClick.bind(this)}>
          <div className="fold_button_line" />
          <div className="fold_button_line" />
          <div className="fold_button_line" />
        </div>
      );
    }
  }

  MenuFoldButtonClick = () => {
    if(this.bMenuFoldOpened) {
      this.bMenuFoldOpened = false;
      this.setState({
        ...this.state,
        bMenuFoldOpen: false
      });
    } else {
      this.bMenuFoldOpened = true;
      this.setState({
        ...this.state,
        bMenuFoldOpen: true
      });
    }
  }

  render() {

    let Menu = this.GetMenuAreaState();
    if(this.props.bMenuFold) {
      Menu = this.GetFoldMenuState();
    } else {
      this.bMenuFoldOpened = false;
    }  

    return (
      <div className="navbar">
        <div className="logo"/>
        {Menu}
      </div>
    );
  }
}

export default Navbar;
