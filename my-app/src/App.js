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
      bSuperNarrow: false,  // 是否窄屏
      bBackToTopButton: false,  //是否显示放回顶部按钮
      iScrollBackLeft: 0,  // 用于返回顶部动画
      bMessageDlg: false  // 联系我们弹窗
    };
    this.strNavbarMaskIn = "navbar_bg navbar_bg_in";  // 顶部栏底色淡入
    this.strNavbarMaskOut = "navbar_bg navbar_bg_out";  // 顶部栏底色淡出
    this.bScrollDown = false;  // 向下滑动状态监控
    this.bSizeNarrow = false;    // 屏幕横向缩放状态监控
    this.bMidNarrow = false;    // 介于两种之间的横向缩放状态
    this.bSuperNarrow = false;    // 屏幕横向大幅度缩放状态监控
    this.iScrollDownHeight = 0;  // 用于记录当前向下滑动的高度
    this.iScrollBackStep=0;  // 用于计算返回顶部动画的移动步长, 避免因为下滑过深返回顶部速度太慢
  }

  // 显示顶部栏底色
  ShowNavbarMask(){
    this.setState({
      ...this.state,
      strNavbarMask: this.strNavbarMaskIn,
      bNavbarShow: true
    });
  }

  // 隐藏顶部栏底色
  HideNavbarMask() {
    this.setState({
      ...this.state,
      strNavbarMask: this.strNavbarMaskOut,
      bNavbarShow: false
    });
  }

  // 设置顶部栏底色的状态
  SetNavbarMaskState(){
    if(!this.bScrollDown && !this.bSizeNarrow) {
      this.HideNavbarMask();
    } else {
      this.ShowNavbarMask();
    }
  }

  // 窗口缩放状态监控
  WindowSizeCondition (iWidth) {
    this.bSizeNarrow = false;
    this.bMidNarrow = false;
    this.bSuperNarrow = false;
    // 当窗口小于一定宽度时
    if(iWidth <= 1050){
      this.bSizeNarrow = true;
    }
    if(iWidth <= 900) {
      this.bSizeNarrow = true;
      this.bMidNarrow = true;
    }
    if(iWidth <= 750) {
      this.bSizeNarrow = true;
      this.bMidNarrow = true;
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

  // 返回顶部动画控制
  ScrollBackToTop(){
    // 返回顶部动画初始化：如果当前返回顶部剩余距离为0且返回顶部按钮处于显示状态
    if(this.state.iScrollBackLeft === 0 && this.state.bBackToTopButton) {
      this.iScrollBackStep = this.iScrollDownHeight/35;
      this.setState({
        ...this.state,
        iScrollBackLeft: this.iScrollDownHeight
      });
    }
    if(this.iScrollDownHeight <= 0) {
      this.iScrollDownHeight = 0; 
      window.scrollTo(0, 0);
      this.setState({
        ...this.state,
        iScrollBackLeft: 0
      });
    } else {
      this.iScrollDownHeight -= this.iScrollBackStep; 
      window.scrollTo(0, this.iScrollDownHeight);
    }
  }

  // 联系我们按钮弹窗
  MessageDlgShow() {
    if(this.state.bMessageDlg) {
      this.setState({
        ...this.state,
        bMessageDlg: false
      });
    } else {
      this.setState({
        ...this.state,
        bMessageDlg: true
      });
    }
    
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this)); //监听滚动
    window.addEventListener('resize', this.handleResize.bind(this)); //监听窗口大小改变
    let iWidth = window.innerWidth;
    this.WindowSizeCondition(iWidth);
    this.iScrollHeight = document.body.scrollHeight;  // 滚动区域的高度
    window.scrollTo(0, 0);
  }

  componentWillUnmount() { //一定要最后移除监听器，以防多个组件之间导致this的指向紊乱
    window.removeEventListener('scroll', this.handleScroll.bind(this));
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  // 向下滑动的响应
  handleScroll = (event) => {
    this.iScrollDownHeight = event.srcElement.scrollingElement.scrollTop;
    this.bScrollDown = false;
    this.bBackToTop = false;
    if(this.iScrollDownHeight >= 85){
      this.bScrollDown = true;
      if(this.iScrollDownHeight >= 450){
        this.setState({
          ...this.state,
          bBackToTopButton: true
        });
      } else {
        this.setState({
          ...this.state,
          bBackToTopButton: false
        });
      }
    }
    this.SetNavbarMaskState();
    // e.srcElement.scrollingElement.scrollTop为距离滚动条顶部高度
    // console.log(event.srcElement.scrollingElement.scrollHeight);
  }

  // 窗口缩放的响应
  handleResize = (event) => {
    let iWidth = event.target.innerWidth;
    this.WindowSizeCondition(iWidth);
  }

  render() {

    // 返回顶部滚动中
    if(this.state.iScrollBackLeft > 0) {
      this.ScrollBackToTop();
    }

    // 设置右下角的按钮
    let BottomButtonArea = (
      <div className="bottom_buttons_area">
        <div className="bottom_buttons_message" onClick={this.MessageDlgShow.bind(this)}/>
      </div>
    );
    if(this.state.bBackToTopButton){
      BottomButtonArea = (
        <div className="bottom_buttons_area">
          <div className="bottom_buttons_message" onClick={this.MessageDlgShow.bind(this)}/>
          <div className="bottom_buttons_up"onClick={this.ScrollBackToTop.bind(this)}/>
        </div>
      );
    }

    let MessageUsDlg = (<div />);
    if(this.state.bMessageDlg) {
      MessageUsDlg = (
        <div className="message_us_dlg">
          <div className="message_title">联系我们</div>
          <div className="message_intro">我们会在收到您的消息后第一时间回复的</div>
          <input type="text" onFocus="this.value=''" placeholder="姓名*" name="name" className="message_input" />
          <input type="text" onFocus="this.value=''" placeholder="邮箱*" name="email" className="message_input"/>
          <textarea rows="10" cols="30" placeholder="想说的话*" className="message_textarea" />
          <input type="text" onFocus="this.value=''" placeholder="验证码" name="code" className="message_input"/>
          <a href="#" class="message_refresh_link">无法识别？换一个</a>
          <div className="message_code" />
        </div>
      );
    }

    return (
      <div className="app">
         <div className={this.state.strNavbarMask}/>
        <Navbar bMenuFold={this.bSizeNarrow}/>
        <Advertise bNarrow={this.bSizeNarrow} bSuperNarrow={this.bSuperNarrow} />
        <BodyArea0 bSuperNarrow={this.bSuperNarrow} />
        <BodyArea1 bSizeNarrow={this.bSizeNarrow} />
        <BodyArea2 bMidNarrow={this.bMidNarrow}/>
        <BottomArea />
        {BottomButtonArea}
        {MessageUsDlg}
      </div>
    );
  }
}

export default App;
