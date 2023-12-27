import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ToktokItemWrapper = styled.div`
  height: 180px;
  padding: 10px;
  margin:  10px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 18px;
    font-weight: 700;
    padding: 0 7px;
    margin-bottom: 15px;
  }
  .content {
    padding: 0 7px;
  }
  .toktokColumn {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }
  .likeCommentView {
    font-size: 12px;
    span {
      padding: 0 7px;
    }
  }
`;

function ToktokItem(props) {
  const navigate = useNavigate()

  return (
    <ToktokItemWrapper
      onClick={() => { navigate(`/community/Toktok/${props.author}`) }}
    >
      <div className='toktokColumn'>
        <div>
          <h5 className='title'>{props.title}</h5>
          <span className='content'>{props.content}</span>
        </div>
        <div className='likeCommentView'>
          <span>좋아요: {props.like}</span>
          <span>댓글수: {props.comment}</span>
          <span>조회수: {props.view}</span>
        </div>
      </div>
      <div className='toktokColumn'>
        <span>작성자: {props.author}</span>
        <img src={props.img} />
      </div>
    </ToktokItemWrapper>
  );
}

export default ToktokItem;