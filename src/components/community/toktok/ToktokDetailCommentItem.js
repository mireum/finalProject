import React from 'react';
import styled from 'styled-components';

const ToktokDetailCommentItemWrapper = styled.div`
  background-color: #ccc;
  .a {
    background-color: #f0f0f0;
    height: 30px;
  }
  .b {
    height: 50px;
  }
`;

function ToktokDetailCommentItem(props) {
  return (
    <ToktokDetailCommentItemWrapper>
      <p className='b'>작성자: {props.name}</p> <br />
      <div>
        <span className='b'>내용: {props.content}</span>
        <span>🗑삭제</span> <hr />
      </div>
    </ToktokDetailCommentItemWrapper>
  );
}

export default ToktokDetailCommentItem;