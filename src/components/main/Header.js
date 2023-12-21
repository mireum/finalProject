import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { HeaderContainer, NavContainer } from '../../css/main';

function Header(props) {
  const navigate = useNavigate();

  const [ isHover, setIsHover ] = useState({
    communityTap: false,
    shopTap: false,
    test: false
  });

  const { communityTap, shopTap, test } = isHover;

  const handleCommunityTapOver = () => {
    setIsHover(prevHover => ({...prevHover, communityTap: true, shopTap: false}))
  }

  const handleShopTapOver = () => {
    setIsHover(prevHover => ({...prevHover, shopTap: true, communityTap: false}))
  }

  return (
    <>
      <HeaderContainer>
        <div className='headerInner'>
          <div className='mainMenu'>
            <a><img src='' alt='logo' /></a>
            <a 
              onMouseOver={handleCommunityTapOver}
            >
              커뮤니티
            </a> 
            <a 
              onMouseOver={handleShopTapOver} 
              onClick={() => navigate('/shop')}
            >
              쇼핑
            </a>
          </div>
          <div className='sumMenu'>
            <a>로그인</a>
            <a>회원가입</a>
          </div>
        </div>
      </HeaderContainer>
      {communityTap 
        ? 
        <NavContainer>
          <div className='navInner'>
            <a>커뮤니티홈</a>
            <a>육아톡톡</a>
          </div>
        </NavContainer>
        : null
      }
      {shopTap 
        ? 
        <NavContainer>
          <div className='navInner'>
            <a>쇼핑홈</a>
            <a>사료</a>
            <a>간식/영양제</a>
            <a>배변/위생</a>
            <a>산책/놀이</a>
          </div>
        </NavContainer>
        : null
      }
    </>
  );
}

export default Header;