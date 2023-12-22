import React from 'react';
import styled from 'styled-components';
import feed from "../../image/feed.jpg";

const ShopContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .detail {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .detail .detail-img .img{
    background-image: url(${feed});
    background-position: center;
    background-size: 500px 500px;
    border-radius: 10px;
    border: 0.5px solid #cdcdcd;
    width: 500px;
    height: 500px;
  }
  /* .detail .detail-text {
    margin-left: 50px;
  } */
  .detail .detail-text p,
  .detail .detail-text h3,
  .detail .detail-text h4 {
    font-weight: bold;
    /* font-size: 30px; */
  }
  .detail .detail-text p {
    font-size: 20px;
    color: #cdcdcd;
    margin-bottom: 10px;
  }
  .detail .detail-text h3 {
    font-size: 30px;
    color: #333;
    margin-bottom: 20px;
  }
  .detail .detail-text h4 {
    font-size: 30px;
    color: #666;
    margin-bottom: 30px;
  }
  .detail .detail-text .text1 {
    font-weight: bold; 
  }
  .detail .detail-text .text2 {
    color: #666;
    margin-left: 40px;
    font-weight: bold; 
  }
  /* .detail select{
    display: block;
  } */
  .detail .detail-btn {
    margin-top: 50px;
  }
  .detail .detail-btn button {
    font-size: 20px;
  }
`;



function ShopDetail(props) {
  return (
    <ShopContainer>
      <div className='detail'>
        <div className='detail-img'>
          <img className='img'/>
        </div>
        <div className='detail-text'>
          <p>프로도기</p>
          <h3>퍼펙션 패드 소형 베이비파우더향 30매</h3>
          <h4>18000</h4>
          <span className='text1'>배송방법</span>
          <span className='text2'>무료배송</span>
          {/* <select>
            <option>옵션 선택</option>
            <option>베이비파우더향 30매</option>
            <option>베이비파우더향 50매</option>
            <option>베이비파우더향 100매</option>
          </select> */}
          <div className='detail-btn'>
            <button type='submit'>장바구니</button>
            <button type='submit'>구매하기</button>
          </div>
        </div>
      </div>
      
    </ShopContainer>
  );
}

export default ShopDetail;