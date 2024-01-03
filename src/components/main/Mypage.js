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
    .inner {
      display: flex;
      justify-content: center;
    }
    input {
      width: 70%;
    }
  }
`;

function Mypage(props) {
  return (
    <Container>
      <div className='box'>
        <div className='inner'><input type='text' disabled/></div>
        <div className='inner'>이름 <input type='text' disabled/></div>
        <div className='inner'>닉네임 <input type='text' /></div>
        <div className='inner'>강아지 이름 <input type='text' /></div>
        <div className='inner'>강아지 나이 <input type='text' /></div>
        
        <div>
          <button>비밀번호 변경</button>
          <button>회원 탈퇴</button>
        </div>

      </div>
    </Container>
  );
}

export default Mypage;