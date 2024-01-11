import axios from 'axios';
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
      <p className='b'>작성자: {props.user.signUserNicname}</p> <br />
      <div>
        <span className='b'>내용: {props.comment}</span>
        <span>{props.date}</span>
        <span onClick={() => { }}>🗑삭제</span> <hr />
      </div>
    </ToktokDetailCommentItemWrapper>
  );
}

export default ToktokDetailCommentItem;