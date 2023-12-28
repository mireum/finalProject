import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCount, increaseCount, removeItemFromCart, selectCartList } from '../../features/cartSlice';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

const CartWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  h2 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  thead {
    border: 1px solid #ddd;
  }

  thead tr th {
    font-weight: bold;
    color: #222;
    text-align: center;
  }
  /* thead tr th + th {
    border-left: 1px solid #999;
  } */
  tbody {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  tbody .count {
    border: none;
    padding: 0px 5px;
    border-radius: 5px;
    margin: 0px 5px;
    background-color: #dbdbdb;
  }
  tbody .delete-btn {
    border: 1px solid #666;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
    background-color: #fff;
    color: #666;
    box-sizing: border-box;
  }
  tbody .delete-btn:hover {
    border: 1px solid #68a6fe;
    background-color: #68a6fe;
    color: #fff;
  }
  tbody tr td {
    text-align: center;
  }
  tbody .total {
    text-align: center;
  }
`;

function Cart(props) {
  const dispatch = useDispatch();
  const cartList = useSelector((selectCartList));

  const formatter = new Intl.NumberFormat('ko-KR');

  // useEffect(() => {
  //   const list = async () => {
  //     await axios.get('/plusCart', { });
  //   }
  // }, []);

  // const plusCart = async () => {
  //   await axios.post('/plusCart', { title, price, postId, count });
  // };

  return (
    <CartWrapper>
      <h2>장바구니🛒</h2>
      <Table hover>
        <thead>
          <tr>
            <th>No</th>
            <th>상품명</th>
            <th>수량</th>
            <th>금액</th>
            <th>상품관리</th>

          </tr>
        </thead>
        <tbody>
          {cartList.map((item, index) => {
            return (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>퍼펙션 패드 소형 베이비파우더향 30매{item.title}</td>
              <td>
                <button
                  className='count'
                  onClick={() => { dispatch(decreaseCount(item.id)); }}
                >
                  -
                </button>
                {item.count}
                <button 
                  className='count'
                  onClick={() => { dispatch(increaseCount(item.id)); }}>
                  +
                </button>
              </td>
              {/* <td>{formatter.format(item.price * item.count)}원</td> */}
              <td>{item.price}</td>
              <td><button type='button' className='delete-btn' onClick={() => { dispatch(removeItemFromCart(item.id)); }}>삭제</button></td>
            </tr>
          )})}

          <tr className='total'>
            <th>합계</th>
            <td></td>
            <td></td>
            <th>
              {/* {formatter.format(
                cartList.reduce((prev, cart) => {
                  return prev + (cart.price * cart.count);
                }, 0))}원 */}
            </th>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </CartWrapper>
  );
}

export default Cart;