import React, { useEffect } from 'react';
import styled from 'styled-components';
import cart from "../../image/cart.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PurchaseWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  h2 {
    padding: 10px 0;
    font-size: 30px;
    font-weight: bold;
  }
  .empty-cart {
    text-align: center;
    padding: 100px 0px;
  }
  .empty-cart img {
    width: 200px;
    height: 200px;
    color: #68a6fe;
  }
  .empty-cart .shop-btn {
    background-color: #68a6fe;
    width: 150px;
    padding: 10px;
    border-radius: 31px;
    font-weight: bold;
    color: #fff;
    margin: 20px auto;
    transition: 0.3s;
  }
  .empty-cart .shop-btn:hover {
    background-color: #3e8bf7;
  }
`;

function Purchase(props) {
  const navigate = useNavigate();

  useEffect(() => {
    const purchaseList = async () => {
      await axios.get('http://localhost:8888/shop/purchase');
    }
    purchaseList();
  }, []);

  return (
    <PurchaseWrap>
      <h2>구매 내역</h2>
      <div className='empty-cart'>
        <img src={cart}/>
        <p>구매내역이 없습니다.</p>
        <div className='shop-btn cursor-pointer' onClick={() => {navigate('/shop')}}>쇼핑으로 이동</div>
      </div>
    </PurchaseWrap>
  );
}

export default Purchase;