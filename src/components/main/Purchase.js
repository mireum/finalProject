import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import cart from "../../image/cart.png";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getLoginUser } from '../../features/userInfoSlice';
import dog from "../../image/dog.png";
import { Table } from 'react-bootstrap';
import { dateFormat } from '../../util';

const PurchaseWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  
  
  h2 {
    padding: 10px 0;
    font-size: 30px;
    font-weight: bold;
    margin: 25px 0px;
  }
  .table thead {
    border-bottom: 1px solid #999;
  }
  .img {
    width: 150px;
    height: 150px;
  }
  tbody td {
    vertical-align: middle;
    /* background-color: #ececec; */
  }

  .total-price {
    font-weight: bold;
  }

  .empty-list {
    text-align: center;
    padding: 100px 0px;
  }
  .empty-list img {
    width: 200px;
    height: 200px;
    color: #68a6fe;
    /* border-radius: 10px; */
  }
  .shop-btn {
    background-color: #68a6fe;
    width: 150px;
    padding: 10px;
    border-radius: 31px;
    font-weight: bold;
    color: #fff;
    margin: 20px auto;
    transition: 0.3s;
    border: none;
    display: flex;
    justify-content: center;

  }
   .shop-btn:hover {
    background-color: #3e8bf7;
  }

  
`;

function Purchase(props) {
  const navigate = useNavigate();
  const [purchaseList, setPurchaseList] = useState([]);
  const loginUser = useSelector(getLoginUser);
  const formatter = new Intl.NumberFormat('ko-KR');
  // const date = new Date();


  useEffect(() => {
    const purchaseList = async () => {
      // { params: { userId: loginUser._id }}
      // console.log(loginUser._id);
      const result = await axios.get(`http://localhost:8888/shop/purchase/${loginUser._id}` );
      // console.log(result.data);
      if (result.data) {
        setPurchaseList(result.data);
      }
    }
    purchaseList();
  }, []);

  console.log(purchaseList);
  return (
    <PurchaseWrap>
      <h2>주문 내역</h2>
      <Table className='table' hover>
        <thead>
          <tr>
            <th>주문 날짜</th>
            <th>주문 상품</th>
            <th>수량</th>
            <th>총 금액</th>
          </tr>
        </thead>
      {
        loginUser._id && purchaseList.list.length > 0 ? purchaseList.list.map((item, index) => {
          console.log(item);
          return (
            <tbody key={index}>
              <tr>{dateFormat(item.date)}</tr>
              { item.list.length > 0 &&
                item.list.map((item, i) => {
                  console.log(item);
                  return (
                    <tr key={i}>
                      <td></td>
                      <td>{item.title}</td>
                      <td>{item.count}</td>
                      <td>{formatter.format(item.price * item.count)}원</td>
                    </tr>
                  )})
              }
            </tbody>
            // <tbody key={index}>
            //   <tr>
            //     <td><img src={dog} className='img' /></td>
            //     <td>{item.list[0].title}</td>
            //     <td>{item.list[0].count}</td>
            //     <td>{formatter.format(item.list.price * item.list.count)}원</td>
            //   </tr>
            // </tbody>
          )
        })
        :
          <div className='empty-list'>
            <div>
              <img src={cart}/>
              <p>구매내역이 없습니다.</p>
              <button className='shop-btn cursor-pointer' onClick={() => {navigate('/shop')}}>쇼핑으로 이동</button>
            </div>
          </div>
      }
      </Table>
    </PurchaseWrap>
  );
}

export default Purchase;