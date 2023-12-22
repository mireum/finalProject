import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ToktokItemWrapper = styled.div`
  .abc {
    padding: 0 10px;
  }
`;

function ToktokItem(props) {
  const navigate = useNavigate()

  return (
    <ToktokItemWrapper
      onClick={() => { navigate(`/community/Toktok/${props.postId}`) }}
    >
      <div>
        {props.a}
        {props.b}
      </div>
      <div>
        <span className='abc'>좋아요</span>
        <span className='abc'>댓글</span>
        <span className='abc'>조회수</span>
      </div>
    </ToktokItemWrapper>
  );
}

export default ToktokItem;