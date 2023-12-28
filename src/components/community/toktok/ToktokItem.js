import React, { useState } from 'react';
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
  .material-symbols-outlined {  // 구글 머터리얼 아이콘
  background-color: #fff;
  border: none;
  }
.googlered {
  color: red;
  font-weight: bold;
  }
`;

function ToktokItem(props) {
  const navigate = useNavigate()

  const [likeRed, setLikeRed] = useState(false);

  const handleLikeRed = () => {
    setLikeRed(!likeRed)
  }
  return (
    <ToktokItemWrapper>
      <div className='toktokColumn'>
        <div onClick={() => { navigate(`/community/Toktok/${props._id}`) }}>
          <h5 className='title'>{props.title}</h5>
          <span className='content'>{props.content}</span>
        </div>
        <div className='likeCommentView'>
          <button
            className={`${likeRed ? "material-symbols-outlined googlered" : "material-symbols-outlined"}`}
            onClick={handleLikeRed}
          > favorite</button>
          <span>{props.like}</span>
          <span className='material-symbols-outlined'>mode_comment</span>
          <span>{props.comment}</span>
          <span class="material-symbols-outlined">visibility</span>
          <span>{props.view}</span>
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