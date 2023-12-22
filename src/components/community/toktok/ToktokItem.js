import React from 'react';
import { ToktokItemWrapper } from '../../../css/community';
import { useNavigate } from 'react-router-dom';


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