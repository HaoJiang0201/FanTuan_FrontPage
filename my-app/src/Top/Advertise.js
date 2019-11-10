import React, { Component } from 'react';
import './Advertise.css';
import './AdvertiseNarrow.css';

class Advertise extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bShowScanCode: false
    };
  }

  ShowScanCode(){
    this.setState ({
      bShowScanCode: true
    });
  }

  HideScanCode() {
    this.setState ({
      bShowScanCode: false
    });
  }

  render() {
    let strAreaStyle = "advertise";
    let strTitleStyle0 = "tiltle_text_large title_posy_0";
    let strTitleStyle1 = "tiltle_text_large title_posy_1";
    let strTitleTextStyle = "tiltle_text_small";
    let strTryButtonStyle = "title_try_button";
    let strScanCodeBGStyle = "scan_code_bg";
    if(this.props.bNarrow) {
      strScanCodeBGStyle += " scan_code_bg_narrow";
    }
    if(this.props.bSuperNarrow) {
      strAreaStyle = "advertise_narrow";
      strTitleStyle0 = "tiltle_text_large title_posy_0_narrow";
      strTitleStyle1 = "tiltle_text_large title_posy_1_narrow";
      strTitleTextStyle = "tiltle_text_small tiltle_text_small_narrow";
      strTryButtonStyle = "title_try_button title_try_button_narrow";
      strScanCodeBGStyle += " scan_code_bg_super_narrow";
    }

    // 根据当前状态标志来设置二维码窗口是否显示来
    let ScanCodeArea = (<div />);
    if(this.state.bShowScanCode) {
      ScanCodeArea = (
        <div>
          <div className="scan_code_dlg" onClick={this.HideScanCode.bind(this)} />
          <div className={strScanCodeBGStyle}>
            <div className="close_button" onClick={this.HideScanCode.bind(this)} >X</div>
            <div className="scan_code_img" />
            <div className="download_links">
              <div className="apple_link" />
              <div className="google_link" />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={strAreaStyle}>
        <div className="title_picture">
         <div className="title_picture_mask" />
          <div className={strTitleStyle0}>饭团外卖</div>
          <div className={strTitleStyle1}>送餐随时随地</div>
          <div className={strTitleTextStyle}>饭团外卖于2014年创立于加拿大温哥华，秉承 “让海外华人生活更轻松” 的理念，致力于打造北美最受欢迎的 “一站式” 生活服务类平台。</div>
          <div className={strTryButtonStyle} onClick={this.ShowScanCode.bind(this)}>点击立即体验</div>
          {ScanCodeArea}
        </div>
      </div>
    );
  }
}

export default Advertise;
