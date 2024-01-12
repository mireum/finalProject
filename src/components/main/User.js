import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getLoginUser } from '../../features/userInfoSlice';
import { useNavigate } from 'react-router-dom';

import { LuUserCheck2 } from "react-icons/lu";
import { BiPurchaseTag } from "react-icons/bi";

const UserPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0px;
  h2 {
    font-size: 25px;
    /* color: #68a6fe; */
    strong {
    font-weight: bold;
    color: #3e8bf7;
    }
  }
  .top-wrap {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
  }
  .top-wrap .mypage-btn,
  .top-wrap .purchase-btn {
    width: 47%;
    border: 2px solid #cdcdcd;
    border-radius: 10px;
    padding: 30px 0;
  }
  /* .top-wrap .mypage-btn:hover,
  .top-wrap .purchase-btn:hover {
    background-color: #68a6fe;
    color: #fff;
  } */
  .top-wrap .mypage-btn div .mypage,
  .top-wrap .purchase-btn div .purchase {
    width: 100%;
    margin: 0 auto;
  }
  .top-wrap .mypage-btn .mypage,
  .top-wrap .purchase-btn .purchase {
    font-size: 70px;
    color: #68a6fe;
  }
  .top-wrap .mypage-btn p,
  .top-wrap .purchase-btn p {
    font-size: 20px;
    font-weight: bold;
    color: #3e8bf7;
    text-align: center;
    margin-top: 10px;
  }
`;

function User(props) {
  const loginUser = useSelector(getLoginUser);
  const navigate = useNavigate();

  return (
    <UserPage>
      <h2><strong>{loginUser.signUserNicname}</strong>님 안녕하세요!</h2>
      <div className='top-wrap'>
        <div className='mypage-btn cursor-pointer' onClick={() => {navigate('/mypage')}}>
          <div><LuUserCheck2 className=' mypage' /></div>
          <p>내 정보</p>
        </div>
        <div className='purchase-btn cursor-pointer'  onClick={() => {navigate('/purchase/:id')}}>
          <div><BiPurchaseTag className='cursor-pointer purchase'/></div>
          <p>주문 내역</p>
        </div>
      </div>
    </UserPage>
  );
}

export default User;