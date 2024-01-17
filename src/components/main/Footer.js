import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";


const FooterContainer = styled.footer`
  background: #313542;

  a {
    cursor: pointer;
    margin: 6px;
    padding: 10px 6px;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
  }

  .footerInner {
    max-width: 1200px;
    margin: 0 auto;
    height: 350px;
  

    .corpCS {
      padding-top: 40px;

      a:first-child {
      margin: 0px;
      margin-right: 6px;
      }

      a:last-child {
      margin: 0px;
      margin-left: 6px;
      }
    }

    .corpInfo {
      padding-top: 40px;

      p {
        color: #ccc;
        font-weight: bold;
        font-size: 14px;
        line-height: 26px;
        position: relative;
      }

      .divisionLine {
        padding: 0 10px;
      }

      p:first-child span::before {
        content: "";
        width: 1px;
        height: 14px;
        background: #ccc;
        position: absolute;
        top: 7px;
      }
    }

    .corpLink {
      padding-top: 40px;
      display: flex;

      p {
        color: #ccc;
        font-size: 22px;
        margin-right: 14px;
      }
    }
  }
`;


function Footer(props) {
  const navigate = useNavigate();

  return (
    <>
      <FooterContainer>
        <div className='footerInner'>
          <div className='corpCS'>
            <a onClick={() => navigate('/')}>회사소개</a>
            <a onClick={() => navigate('/')}>개인정보 처리방침</a>
            <a onClick={() => navigate('/')}>서비스 이용약관</a>
            <a onClick={() => navigate('/')}>고객문의</a>
          </div>
          <div className='corpInfo'>
            <p>(주)강아지<span className='divisionLine' />대표이사: 강아지</p>
            <p>사업자 등록번호: 000-00-00000 </p>
            <p>주소: 인천광역시 남동구 문화로 147 건설회관 2층 그린컴퓨터아트학원 구월점 201호</p>
            <p>Copyright 2023</p> 
          </div>
          <div className='corpLink'>
            <p><FaFacebookSquare /></p>
            <p><FaTwitterSquare /></p>
            <p><FaYoutubeSquare /></p>
            <p><FaInstagramSquare /></p>
          </div>
        </div>
      </FooterContainer> 
    </>
  );
}

export default Footer;