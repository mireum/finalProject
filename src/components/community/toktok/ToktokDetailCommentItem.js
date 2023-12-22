import React from 'react';
import { ToktokDetailCommentItemWrapper } from '../../../css/community';

function ToktokDetailCommentItem(props) {
  return (
    <ToktokDetailCommentItemWrapper>
      <p className='a'>작성자: {props.name}</p> <br />
      <div>
        <span className='a'>내용: {props.content}</span>
        <span>삭제</span> <hr />
      </div>
    </ToktokDetailCommentItemWrapper>
  );
}

export default ToktokDetailCommentItem;