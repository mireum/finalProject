import React from 'react';
import CommunitySlide from '../components/community/CommunitySlide';
import { CommunityHomeContainer } from '../css/community';
import { FaChevronRight } from "react-icons/fa";

function Community(props) {

  return (
    <>
      <CommunitySlide />
      <CommunityHomeContainer>
        <div className='communityHomeContent'>
          <h2>
            땡땡이의 맞춤 이야기 
            <button><FaChevronRight /></button>
          </h2>
        </div>
        <div className='communityHomeContent'>
          <h2>
            육아톡톡 
            <button><FaChevronRight /></button>
          </h2>
        </div>
        <div className='communityHomeContent'>
          <h2>
            꿀팁 대방출 
            <button><FaChevronRight /></button>
          </h2>
        </div>
      </CommunityHomeContainer>


    </>
  );
}

export default Community;