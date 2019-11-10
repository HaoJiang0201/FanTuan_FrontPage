import React, { Component } from 'react';
import './Advertise.css';
import './AdvertiseNarrow.css';

class Advertise extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let strAreaStyle = "advertise";
    let strTitleStyle0 = "tiltle_text_large title_posy_0";
    let strTitleStyle1 = "tiltle_text_large title_posy_1";
    let strTitleTextStyle = "tiltle_text_small";
    let strTryButtonStyle = "title_try_button";
    if(this.props.bSuperNarrow) {
      strAreaStyle = "advertise_narrow";
      strTitleStyle0 = "tiltle_text_large title_posy_0_narrow";
      strTitleStyle1 = "tiltle_text_large title_posy_1_narrow";
      strTitleTextStyle = "tiltle_text_small tiltle_text_small_narrow";
      strTryButtonStyle = "title_try_button title_try_button_narrow";
    }

    return (
      <div className={strAreaStyle}>
        <div className="title_picture">
         <div className="title_picture_mask" />
          <div className={strTitleStyle0}>饭团外卖</div>
          <div className={strTitleStyle1}>送餐随时随地</div>
          <div className={strTitleTextStyle}>饭团外卖于2014年创立于加拿大温哥华，秉承 “让海外华人生活更轻松” 的理念，致力于打造北美最受欢迎的 “一站式” 生活服务类平台。</div>
          <div className={strTryButtonStyle}>点击立即体验</div>
        </div>
      </div>
    );
  }
}

export default Advertise;
