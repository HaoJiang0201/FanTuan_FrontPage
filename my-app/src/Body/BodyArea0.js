import React, { Component } from 'react';
import './BodyArea0.css';

class BodyArea0 extends Component {


  render() {
    return (
      <div className="body_area_0">
        <div className="area0_title">认识饭团</div>
        <div className="area_intro_area">
          <div className="area_intro_text">目前，饭团外卖已覆盖温哥华、多伦多、维多利亚，埃德蒙顿等主流一线城市，全加拿大用户量35万+，合作商家4000多家，是加拿大最大的华人送餐平台。主营业务除送餐外，还有广告推广、线上商城、自提业务等。2019年，饭团将以势如破竹之势进军卡尔加里、蒙特利尔、西雅图、滑铁卢，密西沙加等地，实现加拿大送餐服务全覆盖。
          </div>
        </div>
        <div className="items_block_area">
          <div className="item_block">
            <div className="item_image image_0"/>
            <div className="item_num"> 4,000+</div>
            <div className="item_name"> 合作商家</div>
            <div className="item_text"> 合作餐厅达到4,000+家</div>
          </div>
          <div className="divider" />
          <div className="item_block">
            <div className="item_image image_1"/>
            <div className="item_num"> 350,000+</div>
            <div className="item_name"> 用户量</div>
            <div className="item_text"> 350,000+在线活跃用户</div>
          </div>
          <div className="divider" />
          <div className="item_block border_none">
            <div className="item_image image_2"/>
            <div className="item_num">250,000+</div>
            <div className="item_name"> 每月单量</div>
            <div className="item_text"> 平均每月250,000+外送订单</div>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyArea0;
