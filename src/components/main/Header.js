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

  const hadletest = () => {
    setIsHover(prevHover => ({...prevHover, shopTap: false, communityTap: false}))
  }

  return (
    <>
      <HeaderContainer onMouseLeave={hadletest}>
        <div className='headerWarpper'>
          <div className='headerInner'>
            <div className='mainMenu'>
              <a><img src='' alt='logo' /></a>
              <a 
                onMouseOver={handleCommunityTapOver}
                onClick={() => navigate('/')}
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
              <a onClick={() => navigate('/')}>로그인</a>
              <a onClick={() => navigate('/')}>회원가입</a>
            </div>
          </div>
        </div>
      {communityTap 
        ? 
        <NavContainer>
          <div className='navInner'>
            <a onClick={() => navigate('/')}>커뮤니티홈</a>
            <a onClick={() => navigate('/')}>육아톡톡</a>
          </div>
        </NavContainer>
        : null
      }
      {shopTap 
        ? 
        <NavContainer>
          <div className='navInner'>
            <a onClick={() => navigate('/')}>쇼핑홈</a>
            <a onClick={() => navigate('/')}>사료</a>
            <a onClick={() => navigate('/')}>간식/영양제</a>
            <a onClick={() => navigate('/')}>배변/위생</a>
            <a onClick={() => navigate('/')}>산책/놀이</a>
          </div>
        </NavContainer>
        : null
      }
      </HeaderContainer>
    </>
  );
}

export default Header;