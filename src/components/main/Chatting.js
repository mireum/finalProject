import React from 'react';
import styled from 'styled-components';

const ChattingContainer = styled.div`
  max-width: 1200px;
  min-height: 800px;
  margin: 70px auto;

  .inner {
    display: flex;
    height: 700px;

    .userinfo-box {
      flex-basis: 150px;
      background-color: #68a6fe;

      div {
        padding: 10px 0;
        display: flex;
        justify-content: center;
      }

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      span {
        margin-left: 6px;
        font-weight: bold;
      };
    }

    .chattinglist-box {
      flex-basis: 350px;
      background-color: orange;
    }
    
    .chatting-box {
      flex-basis: 700px;
      background-color: beige;  
    }
  }
`;

function Chatting(props) {
  return (
    <ChattingContainer>
      <div className='inner'>
        <div className='userinfo-box'>
          <div>
            <img src='https://i.namu.wiki/i/Bge3xnYd4kRe_IKbm2uqxlhQJij2SngwNssjpjaOyOqoRhQlNwLrR2ZiK-JWJ2b99RGcSxDaZ2UCI7fiv4IDDQ.webp' />   
            <p><span>만식이</span></p>
          </div>
          <div>
            <img src='https://i.namu.wiki/i/Bge3xnYd4kRe_IKbm2uqxlhQJij2SngwNssjpjaOyOqoRhQlNwLrR2ZiK-JWJ2b99RGcSxDaZ2UCI7fiv4IDDQ.webp' />   
            <p><span>만식이</span></p>
          </div>
        </div>
        <div className='chattinglist-box'>

        </div>
        <div className='chatting-box'>
          
        </div>
      </div>
    </ChattingContainer>
  );
}

export default Chatting;