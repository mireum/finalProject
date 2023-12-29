import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from "styled-components";
import { getLoginUser } from '../../features/userInfoSlice';

const HeaderContainer = styled.header`
  position: sticky;
  background: #fff;
  top: 0;
  z-index: 21;
  
  a {
    cursor: pointer;
    margin: 0 8px;
    padding: 10px 6px;
    font-size: 17px;
    font-weight: bold;

    /* &:nth-child(1n+2):hover {
      color: orange;
    } */
  }

  .headerWarpper {
    border-bottom: 1px solid #ccc;
  }

  .headerInner {
    max-width: 1200px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .mainMenu {

      a:first-child {
      margin: 0px;
      margin-right: 8px;
      }
    }

    .sumMenu {

      a {
        font-size: 14px;
        color: #222;
        opacity: 0.6;
      }

      a:last-child {
      margin: 0px;
      margin-left: 8px;
      }
    }
  }
`;

const NavContainer = styled.nav`
  border-bottom: 1px solid #ccc;
  position: absolute;
  left: 0;
  right: 0;
  background: #fff;
  /* opacity: 0;
  transition: opacity 0.5s ease-in-out; */

  a {
    cursor: pointer;
    margin: 0 8px;
    padding: 10px 6px;
    font-size: 15px;
    font-weight: bold;
  }

  .navInner {
    max-width: 1200px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    a:first-child {
    margin: 0px;
    margin-right: 8px;
    }

    a:last-child {
    margin: 0px;
    margin-left: 8px;
    }
  }
`;

function Header(props) {
  const navigate = useNavigate();
  const 로그인중 = useSelector(getLoginUser) // 현재 로그인중 유저 정보

  const [isHover, setIsHover] = useState({
    communityTap: false,
    shopTap: false,
    test: false
  });

  const { communityTap, shopTap, test } = isHover;

  const handleCommunityTapOver = () => {
    setIsHover(prevHover => ({ ...prevHover, communityTap: true, shopTap: false }));
  };

  const handleShopTapOver = () => {
    setIsHover(prevHover => ({ ...prevHover, shopTap: true, communityTap: false }));
  };

  const hadleTapMouseLeave = () => {
    setIsHover(prevHover => ({ ...prevHover, shopTap: false, communityTap: false }));
  };

  // if (communityTap || shopTap) {
  //   const navElement = document.querySelector('nav');
  //   if (navElement) {
  //     navElement.style.opacity = 1;
  //   }
  // }


  return (
    <>
      <HeaderContainer onMouseLeave={hadleTapMouseLeave}>
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
              {로그인중 ?
                <span>환영합니다 {로그인중.signUserNicname}</span> :
                <span></span>
              }
              {로그인중 ?
                <a onClick={() => navigate('/login')}>로그아웃</a> : /* 로그아웃 할라면 새로고침 한번 ㄱㄱ */
                <a onClick={() => navigate('/login')}>로그인</a>
              }
              <a onClick={() => navigate('/signup')}>회원가입</a>
            </div>
          </div>
        </div>
        {communityTap
          ?
          <NavContainer>
            <div className='navInner'>
              <a onClick={() => navigate('/')}>커뮤니티홈</a>
              <a onClick={() => navigate('/community/Toktok')}>육아톡톡</a>
              <a onClick={() => navigate('/community/dailyDog')}>데일리독</a>
              <a onClick={() => navigate('/community/fleamarket')}>중고거래</a>
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