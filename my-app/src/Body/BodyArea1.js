import React, { Component } from 'react';
import './BodyArea1.css';

class BodyArea1 extends Component {

  render() {

    let strPageStyle = "body_area_1";
    let strBodyStyle = "area1_body";
    let strImageAreaStyle = "area1_image_area";
    if(this.props.bSizeNarrow) {
      strPageStyle = "body_area_1 body_area_1_narrow";
      strBodyStyle = "area1_body_narrow";
      strImageAreaStyle = "area1_image_area_narrow";
    }

    return (
      <div className={strPageStyle}>
        <div className="area1_title">饭团特色</div>
        <div className={strBodyStyle}>
          <div className="area1_list_area">
            <div className="area1_list_item">
              <div className="area1_list_item_image list_item_image_0" />
              <div className="area1_list_item_info">
                  专业保温设施
                  <div className="area1_list_item_detail">
                  高性能保温设备，保冷保热6小时
                </div>
              </div>
            </div>
            <div className="area1_list_item">
              <div className="area1_list_item_image  list_item_image_1" />
              <div className="area1_list_item_info">
                实时订单状态
                <div className="area1_list_item_detail">
                精准定位送餐员路径，实时更新送餐距离
                </div>
              </div>
            </div>
            <div className="area1_list_item">
              <div className="area1_list_item_image  list_item_image_2" />
              <div className="area1_list_item_info">
                火速配送到家
                <div className="area1_list_item_detail">
                接单一秒，及时送达
                </div>
              </div>
            </div>
            <div className="area1_list_item">
              <div className="area1_list_item_image  list_item_image_3" />
              <div className="area1_list_item_info">
                多样付款方式
                <div className="area1_list_item_detail">
                支持visa/master/debit/支付宝/微信/现金付款
                </div>
              </div>
            </div>
          </div>
          <div className={strImageAreaStyle}>
            <div className="area1_image">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyArea1;
