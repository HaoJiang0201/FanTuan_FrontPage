import React, { Component } from 'react';
import './App.css';
import './Top/Navbar.css';
import Navbar from './Top/Navbar';
import Advertise from './Top/Advertise';
import BodyArea0 from './Body/BodyArea0';
import BodyArea1 from './Body/BodyArea1';
import BodyArea2 from './Body/BodyArea2';
import BottomArea from './Bottom/BottomArea';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      strNavbarMask: "navbar_bg navbar_bg_init",  // 顶部栏底色的初始状态
      bNavbarShow: false,  // 是否显示顶部栏的底色
      bSuperNarrow: false
    };
    this.strNavbarMaskIn = "navbar_bg navbar_bg_in";  // 顶部栏底色淡入
    this.strNavbarMaskOut = "navbar_bg navbar_bg_out";  // 顶部栏底色淡出
    this.bScrollDown = false;  // 只用于状态监控判断，不进行this.state的设置
    this.bSizeNarrow = false;
    this.bSuperNarrow = false;

  }

  ShowNavbarMask(){
    this.setState({
      strNavbarMask: this.strNavbarMaskIn,
      bNavbarShow: true
    });
  }

  HideNavbarMask() {
    this.setState({
      strNavbarMask: this.strNavbarMaskOut,
      bNavbarShow: false
    });
  }

  SetNavbarMaskState(){
    if(!this.bScrollDown && !this.bSizeNarrow) {
      this.HideNavbarMask();
    } else {
      this.ShowNavbarMask();
    }
  }

  WindowSizeCondition (iWidth) {
    this.bSizeNarrow = false;
    this.bSuperNarrow = false;
    // 当窗口小于一定宽度时
    if(iWidth <= 1000){
      this.bSizeNarrow = true;
    }
    if(iWidth <= 700) {
      this.bSizeNarrow = true;
      this.bSuperNarrow = true;
      this.setState({
        ...this.state,
        bSuperNarrow: true
      });
    } else
    {
      this.setState({
        ...this.state,
        bSuperNarrow: false
      });
    }
    this.SetNavbarMaskState();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this)); //监听滚动
    window.addEventListener('resize', this.handleResize.bind(this)); //监听窗口大小改变
    let iWidth = window.innerWidth;
    this.WindowSizeCondition(iWidth);
  }

  componentWillUnmount() { //一定要最后移除监听器，以防多个组件之间导致this的指向紊乱
    window.removeEventListener('scroll', this.handleScroll.bind(this));
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleScroll = (event) => {
    let fScrollDownDistance = event.srcElement.scrollingElement.scrollTop;
    if(fScrollDownDistance >= 85.0){
      this.bScrollDown = true;
    } else {
      this.bScrollDown = false;
    }
    this.SetNavbarMaskState();
    // e.srcElement.scrollingElement.scrollTop为距离滚动条顶部高度
    // e.srcElement.scrollingElement.scrollHeight为整个文档高度
  }

  handleResize = (event) => {
    let iWidth = event.target.innerWidth;
    this.WindowSizeCondition(iWidth);
  }

  render() {

    return (
      <div className="app">
         <div className={this.state.strNavbarMask}/>
        <Navbar bMenuFold={this.bSizeNarrow}/>
        <Advertise bNarrow={this.bSizeNarrow} bSuperNarrow={this.bSuperNarrow} />
        <BodyArea0 />
        <BodyArea1 />
        <BodyArea2 />
        <BottomArea />
      </div>
    );
  }
}

export default App;
