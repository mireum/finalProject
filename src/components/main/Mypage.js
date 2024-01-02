import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  
  .box {
    max-width: 800px;
    background-color: antiquewhite;
    margin: 0 auto;
    padding: 10px;
    input {
      width: 80%;
    }
  }
`;

function Mypage(props) {
  return (
    <Container>
      <div className='box'>
        <div><input type='text' disabled/></div>
        <div>이름 <input type='text' disabled/></div>
        <div>닉네임 <input type='text' /></div>
        <div>강아지 이름 <input type='text' /></div>
        <div>강아지 나이 <input type='text' /></div>
        
        <button>비밀번호 변경</button>
        <button>회원 탈퇴</button>

      </div>
    </Container>
  );
}

export default Mypage;