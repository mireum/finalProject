import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { AiFillEdit } from "react-icons/ai";


const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  .box {
    max-width: 800px;
    background-color: antiquewhite;
    margin: 0 auto;
    padding: 30px;
    h1 {
      font-size: 34px;
      font-weight: bold;
      color: #332b2b;
      margin-bottom: 50px;
      text-align: center;
    }
    .inner {
      display: flex;
      justify-content: space-between;
      margin: 26px 10px;
      position: relative;
      input {
        width: 70%;
        height: 2rem;
        border-radius: 10px;
        text-align: center;
      }
      button {
        width: 50%;
        height: 3rem;
        border: none;
        border-radius: 15px;
        background-color: #538ac9;
        color: #fff;
        font-weight: bold;
        margin-top: 20px;
      }
      button + button {
        margin-left: 20px;
      }
      button:hover {
        background-color: #2c619e;
      }
      .editBtn {
        font-size: 20px;
        position: absolute;
        right: 10px;
        top: 2px;
        cursor: pointer;
      }
    }
  }
`;

function Mypage(props) {
  // const user = useSelector();

  return (
    <Container>
      <div className='box'>
        <h1>내 정보</h1>
        <div className='inner'>이름<input type='text' value='qwer' disabled/></div>
        <div className='inner'>닉네임 
          <input type='text' />
          <div className='editBtn'>
            <AiFillEdit />
          </div>
        </div>
        <div className='inner'>강아지 이름 <input type='text' /></div>
        <div className='inner'>강아지 나이 <input type='text' /></div>
        
        <div className='inner'>
          <button type='button' className='botton'>비밀번호 변경</button>
          <button type='button' className='button'>회원 탈퇴</button>
        </div>

      </div>
    </Container>
  );
}

export default Mypage;