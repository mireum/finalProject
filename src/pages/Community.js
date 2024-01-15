import React from 'react';
import CommunitySlide from '../components/community/communityHome/CommunitySlide';
import { FaChevronRight } from "react-icons/fa";
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import NewToktok from '../components/community/communityHome/NewToktok';
import HoneyTip from '../components/community/communityHome/HoneyTip';

const CommunityHomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 70px;

  .communityHomeContent {
    margin-top: 60px;

    h2 {
      font-size: 20px;
      font-weight: bold;
      display : inline-flex;
      align-items: center;

      button {
        cursor: pointer;
        border: none;
        background: none;
        display : inline-flex;
        align-items: center;
        color: #68a6fe;
      }
    }
  }
`;

function Community(props) {
  const navigate = useNavigate();

  return (
    <>
      <CommunitySlide />
      <CommunityHomeContainer>
        <div className='communityHomeContent'>
          <h2>
            데일리독 최근 게시글
            <button title='더보기'><FaChevronRight /></button>
          </h2>
        </div>
        <div className='communityHomeContent'>
          <h2>
            육아톡톡 최근 게시글
            <button title='더보기' onClick={() => navigate('/community/Toktok')}><FaChevronRight /></button>
          </h2>
            <NewToktok />
        </div>
        <div className='communityHomeContent'>
          <h2>
            꿀팁 대방출
            <button title='더보기'><FaChevronRight /></button>
          </h2>
          <HoneyTip />
        </div>
      </CommunityHomeContainer>


    </>
  );
}

export default Community;