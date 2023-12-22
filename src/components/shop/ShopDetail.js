import React from 'react';
import {ShopContainer} from "../../css/Shop.js";

function ShopDetail(props) {
  return (
    <ShopContainer>
      <div className='detail'>
        <div className='detail-img'>
          <img />
        </div>
        <div>
          <p>브랜드명</p>
        </div>
      </div>
    </ShopContainer>
  );
}

export default ShopDetail;