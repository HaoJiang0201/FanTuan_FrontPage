import React, { Component } from 'react';
import './BodyArea2.css';

class BodyArea2 extends Component {


  render() {
    return (
      <div className="body_area_2">
        <div className="area2_title">特色业务</div>
        <div className="block_area">
          <div className="block">
            <div className="block_image block_image_0"/>
            <div className="block_title">餐厅自提</div>
            <div className="block_info">自提九折，无需小费和送餐费</div>
            <div className="block_info">不在送餐范围内的餐厅也可下单自提</div>
            <div className="block_info">手机点单，网上支付，不用排队，到店即取</div>
          </div>
          <div className="block">
            <div className="block_image block_image_1"/>
            <div className="block_title">优质配送</div>
            <div className="block_info">全程保驾护航</div>
            <div className="block_info">国内定制专业保温箱</div>
            <div className="block_info">训练有素的送餐团队和客服团队</div>
          </div>
          <div className="block">
            <div className="block_image block_image_2"/>
            <div className="block_title">饭团商城</div>
            <div className="block_info">享受饭团外卖优质的配送服务</div>
            <div className="block_info">与各大超市、进货商长期合作</div>
            <div className="block_info">为顾客抢先拿到第一手货源和最优价格</div>
          </div>
        </div>

      </div>
    );
  }
}

export default BodyArea2;
