import React, { Component } from 'react';
import './BottomArea.css';

class BottomArea extends Component {

  render() {
    return (
      <div className="bottom_area">
        <div className="bottom_picture">
          <div className="bottom_text_large">您有疑问需要解答？</div>
          <div className="bottom_text_small">选择您方便的联系方式，立即与我们联系。</div>
          <div className="bottom_item">
            <div className="bottom_item_image item_image_0" />
            <div className="bottom_item_text">285-5489 Byrne Rd, Burnaby BC</div>
          </div>
          <div className="bottom_item">
            <div className="bottom_item_image item_image_1" />
            <div className="bottom_item_text">1-778-833-1131</div>
          </div>
          <div className="bottom_item">
            <div className="bottom_item_image item_image_2" />
            <div className="bottom_item_text">info@fantuan.ca</div>
          </div>
        </div>
      </div>
    );
  }
}

export default BottomArea;
