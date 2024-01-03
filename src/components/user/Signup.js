import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { pushUserInfo } from '../../features/userInfoSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignupWrapper = styled.div`
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700');
*,*:before,*:after{box-sizing:border-box}
body{
  min-height:100vh;
  font-family: 'Raleway', sans-serif;
}
.container{
  position:absolute;
  left: 0;
  right: 0;
  width:100%;
  height:100%;
  /* overflow:hidden; */
  &:hover,&:active{
    .top, .bottom{
      &:before, &:after{ // 내부 공간 설정
        margin-left: 300px;
        transform-origin: -300px 50%;
        transition-delay:0s;
      }
    }
    .center{
      opacity:1;
      transition-delay:0.2s;
    }
  }
}
.top, .bottom{
  &:before, &:after{
    content:'';
    display:block;
    position:absolute;
    width:200vmax;
    height:200vmax;
    top:50%;left:50%;
    margin-top:-100vmax;
    transform-origin: 0 50%;
    transition:all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
    z-index:10;
    opacity:0.65;
    transition-delay:0.2s;
  }
}
.top{
  &:before{transform:rotate(45deg);background:#e46569;}
  &:after{transform:rotate(135deg);background:#ecaf81;}
}
.bottom{
  &:before{transform:rotate(-45deg);background:#60b8d4;}
  &:after{transform:rotate(-135deg);background:#3745b5;}
}
.center{
  position:absolute;
  width:400px;
  height:400px;
  top:50%;left:50%;
  margin-left:-200px;
  margin-top:-200px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:30px;
  opacity:0;
  transition:all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
  transition-delay:0s;
  color:#333;
  input{
    width:100%;
    padding:15px;
    margin:5px;
    border-radius:1px;
    border:1px solid #ccc;
    font-family:inherit;
  }
  button {
    width: 100px;
    height: 33px;
    margin-top: 10px;
  }
}
`

function Signup(props) {
  const [signId, setSignId] = useState(); // 아이디
  const [signPw, setSignPw] = useState(); // 비번
  const [signUserNicname, setSignUserNicname] = useState(); // 유저닉네임
  const [signDogType, setSignDogType] = useState(); // 견종
  const [signDogAge, setSignDogAge] = useState(); // 개나이
  const [signDogWeight, setSignDogWeight] = useState(); // 개몸무게
  const [signDogName, setSignDogName] = useState(); // 개이름
  /* 몸무게??? 기입할까 */

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeId = (e) => {
    setSignId(e.target.value)
  }
  const changePw = (e) => {
    setSignPw(e.target.value)
  }
  const changeNicname = (e) => {
    setSignUserNicname(e.target.value)
  }
  const changeDogType = (e) => {
    setSignDogType(e.target.value)
  }
  const changeDogAge = (e) => {
    setSignDogAge(e.target.value)
  }
  const changeDogWeigth = (e) => {
    setSignDogWeight(e.target.value);
  }
  const changeDogNmae = (e) => {
    setSignDogName(e.target.value)
  }
  const userInput = { signId, signPw, signUserNicname, signDogType, signDogAge, signDogName }

  // const handleSignUp = () => {
  //   dispatch(pushUserInfo(userInput));
  //   window.localStorage.setItem(signId, JSON.stringify(userInput)); // 회원정보 로컬스토리지
  //   navigate('/login')
  // }
  const handleSignUp = () => {
    dispatch(pushUserInfo(userInput));
    axios.post('http://localhost:8888/register', { userInput })
    navigate('/login')
  }


  const test = ['허스키', '푸들', '리트리버', '포메라니안', '스피츠']
  return (
    <SignupWrapper>
      <div class="container" onclick="onclick">
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="center">
          <h2>회원가입 페이지 입니다</h2>
          <label htmlFor='id' /> {/* 아이디 */}
          <input
            id='id'
            type="text"
            placeholder="id"
            value={signId}
            onChange={changeId}
          />
          <label htmlFor='pw' /> {/* 비밀번호 */}
          <input
            id='pw'
            type="password"
            placeholder="password"
            value={signPw}
            onChange={changePw}
          />
          <label htmlFor='userNicname' /> {/* 닉네임 */}
          <input
            id='userNicname'
            type="text"
            placeholder="Nicname"
            value={signUserNicname}
            onChange={changeNicname}
          />
          <label htmlFor='signDogType' /> {/* 견종 */}
          <input
            id='signDogType'
            type="text"
            placeholder="DogType"
            value={signDogType}
            onChange={changeDogType}
          />
          <select
            id='signDogType'
            value={signDogType}
            onChange={changeDogType}
          >
            {/* <option value={'푸들'}>푸들</option>
            <option value={'리트리버'}>리트리버</option>
            <option value={'허스키'}>허스키</option>
            <option value={'포메라니안'}>포메라니안</option>
            <option value={'스피츠'}>스피츠</option> */}
            {
              test.map((a) => {
                return (<option>{a}</option>)
              })
            }
          </select>
          <label htmlFor='signDogAge' /> {/* 개나이 */}
          <input
            id='signDogAge'
            type="number"
            placeholder="DogAge"
            value={signDogAge}
            onChange={changeDogAge}
          />
          <label htmlFor='signDogWeight' /> {/* 개무게 */}
          <input
            id='signDogWeight'
            type="number"
            placeholder="DogWeight"
            value={signDogWeight}
            onChange={changeDogWeigth}
          />
          <label htmlFor='signDogName' /> {/* 개이름 */}
          <input
            id='signDogName'
            type="text"
            placeholder="DogName"
            value={signDogName}
            onChange={changeDogNmae}
          />
          <button onClick={() => { handleSignUp() }}>회원가입</button>
          <h2>&nbsp;</h2>
        </div>
      </div>
    </SignupWrapper>
  );
}

export default Signup;