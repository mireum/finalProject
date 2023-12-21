import React from 'react';
import { FooterContainer } from '../../css/main';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";

function Footer(props) {
  return (
    <>
      <FooterContainer>
        <div className='footerInner'>
          <div className='corpCS'>
            <a>회사소개</a>
            <a>개인정보 처리방침</a>
            <a>서비스 이용약관</a>
            <a>고객문의</a>
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