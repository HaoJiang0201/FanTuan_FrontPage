import React, { Component } from 'react';
import './Advertise.css';

class Advertise extends Component {


  render() {
    return (
      <div className="advertise">
        <div className="title_picture">
         <div className="title_picture_mask" />
          <div className="tiltle_text_large title_posy_0">饭团外卖</div>
          <div className="tiltle_text_large title_posy_1">送餐随时随地</div>
          <div className="tiltle_text_small">饭团外卖于2014年创立于加拿大温哥华，秉承 “让海外华人生活更轻松” 的理念，致力于打造北美最受欢迎的 “一站式” 生活服务类平台。</div>
          <div className="title_try_button">点击立即体验</div>
        </div>
      </div>
    );
  }
}

export default Advertise;
