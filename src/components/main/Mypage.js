import React, { useState } from 'react';
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
      line-height: 30px;
      input, select {
        width: 50%;
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
        cursor: pointer;
      }
    }
  }
`;


function Mypage(props) {
  // const user = useSelector();
  const [ OnInput, setOnInput ] = useState({
    nick: false,
    dogtype: false,
    dogname: false,
    dogage: false,
  })

  const spacies = [ '말티즈', '푸들', '치와와', '포메라니안',
    '시츄', '스파니엘', '닥스훈트', '보더콜리', '리트리버', '비글', 
    '진돗개', '웰시코기', '도베르만', '불독', '사모예드', '시바견',
    '퍼그', '셰퍼드', '달마시안'];

  return (
    <Container>
      <div className='box'>
        <h1>내 정보</h1>
        <div className='inner'>이름<input type='text' value='qwer' disabled/></div>
        <div className='inner'>이메일<input type='text' value='qwer' disabled/></div>
        <div className='inner'>닉네임 
          <input type='text' disabled />
          <div className='editBtn'>
            <AiFillEdit />
          </div>
        </div>
        <div className='inner'>강아지 종류 
          <select type='text' >
            {spacies.map(item => <option>{item}</option>)}
          </select>
        </div>
        <div className='inner'>강아지 이름 
          <input type='text' disabled/>
          <div className='editBtn'>
            <AiFillEdit />
          </div>
        </div>
        <div className='inner'>강아지 나이 
          <input type='text' disabled/>
          <div className='editBtn'>
            <AiFillEdit />
          </div>
        </div>
        
        <div className='inner'>
          <button type='button' className='botton'>비밀번호 변경</button>
          <button type='button' className='button'>회원 탈퇴</button>
        </div>

      </div>
    </Container>
  );
}

export default Mypage;