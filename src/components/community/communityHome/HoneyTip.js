import React from 'react';
import styled from 'styled-components';
import { IoIosStar } from "react-icons/io";

const HoneyTipContainer = styled.div`
  margin-top: 20px;
  max-width: 1200px;
  display: flex;

  a {
    cursor: pointer;

    &:first-child {
      margin-right: 10px;
    }

    &:nth-child(n+2):nth-child(-n+3) {
      margin: 0 10px;
    }

    &:last-child {
      margin-left: 10px;
    }
  }

  img {
    border-radius: 10px 10px 0 0;
  }

  p {
    margin-top: 10px;
    padding: 4px;
    font-weight: bold;
    color: #aaa;
    display : inline-flex;
    align-items: center;
    
    span {
      color: yellow;
      display : inline-flex;
      align-items: center;
      padding-right: 4px;
    }
  }
  
  h3 {
    font-weight: bold;
    font-size: 17px;
    padding: 4px;
  }
`;

function HoneyTip(props) {
  return (
    <HoneyTipContainer>
      <a>
        <img src='https://image.msbg.io/?p=mocoblob.blob.core.windows.net%2Fassets%2Fmagazine%2Fimg%2F21_1649897920784_0.png&w=285&h=285'></img>
        <p><span><IoIosStar /></span>임신 1주차</p>
        <h3>배 속에 생명이 찾아왔어요~</h3>
      </a>
      <a>
        <img src='https://image.msbg.io/?p=mocoblob.blob.core.windows.net%2Fassets%2Fmagazine%2Fimg%2F21_1653384808847_0.png&w=285&h=285'></img>
        <p><span><IoIosStar /></span>2주차</p>
        <h3>꼬물이들의 배변 유도 방법!</h3>
      </a>
      <a>
        <img src='https://image.msbg.io/?p=mocoblob.blob.core.windows.net%2Fassets%2Fmagazine%2Fimg%2F14_1703557221309_0.png&w=285&h=285'></img>
        <p><span><IoIosStar /></span>4~8주차</p>
        <h3>실내에서 뛰어노는 방법은~</h3>
      </a>
      <a>
        <img src='https://image.msbg.io/?p=mocoblob.blob.core.windows.net%2Fassets%2Fmagazine%2Fimg%2F21_1649898106609_0.png&w=285&h=285'></img>
        <p><span><IoIosStar /></span>임신 7~9주차</p>
        <h3>출산이 임박했어요!</h3>
      </a>
    </HoneyTipContainer>
  );
}

export default HoneyTip;