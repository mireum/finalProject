import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getLoginUser } from '../../../features/userInfoSlice';

const ToktokItemWrapper = styled.div`
  height: 180px;
  padding: 10px;
  margin:  10px 0;
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
  img {
    width: 200px;
    height: 100px;
  }
`;

function ToktokItem(props) {
  const navigate = useNavigate()

  const [likeRed, setLikeRed] = useState(false);

  const 로그인중 = useSelector(getLoginUser) // 현재 로그인중 유저 정보

  const { like, view, comment } = props;

  const handleLikeRed = () => {
    setLikeRed(!likeRed)
  }

  function elapsedTime(date) {
    const start = new Date(date);
    const end = new Date();
    const diff = (end - start) / 1000;
    const times = [
      { name: '년', milliSeconds: 60 * 60 * 24 * 365 },
      { name: '개월', milliSeconds: 60 * 60 * 24 * 30 },
      { name: '일', milliSeconds: 60 * 60 * 24 },
      { name: '시간', milliSeconds: 60 * 60 },
      { name: '분', milliSeconds: 60 },
    ];
    for (const value of times) {
      const betweenTime = Math.floor(diff / value.milliSeconds);

      if (betweenTime > 0) {
        return `${betweenTime}${value.name} 전`;
      }
    }
    return '방금 전';
  }
  const 경과일 = elapsedTime(props.date);

  const addView = async () => {
    await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/community/toktok/view`, 로그인중);
  }
  console.log(로그인중);

  return (
    <ToktokItemWrapper>
      <div className='toktokColumn'>
        <div onClick={() => { addView(); navigate(`/community/Toktok/${props._id}`) }}>
          <h5 className='title'>{props.title}</h5>
          <span className='content'>{props.content}</span>
        </div>
        <div className='likeCommentView'>
          <button
            className={`${likeRed ? "material-symbols-outlined googlered" : "material-symbols-outlined"}`}
            onClick={handleLikeRed}
          > favorite</button>
          <span>{like ? like?.length : 0}</span>
          <span className='material-symbols-outlined'>mode_comment</span>
          <span>{comment ? comment.length : 0}</span>
          <span className="material-symbols-outlined">visibility</span>
          <span>{view ? view?.length : 0}</span>
          <span>{경과일}</span>
        </div>
      </div>
      <div className='toktokColumn'>
        <span>작성자: {props?.user?.signUserNicname}</span>
        <img src={props.imgUrl} />
      </div>
    </ToktokItemWrapper>
  );
}

export default ToktokItem;