import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ToktokDetailCommentItem from './ToktokDetailCommentItem';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getLoginUser } from '../../../features/userInfoSlice';

const ToktokDetailWrapper = styled.div`
  margin:  30px 100px;
  padding: 20px 40px;
  border: 1px solid #000;
  .titleContent {
    h4{
      text-align: center;
      padding: 30px 0;
      font-size: 30px;
    }
    h5 {
      text-align: end;
    }
    p {
      padding: 30px 0;
    }
    img {
      width: 500px;
      height: 300px;
    }
  }
`;

function ToktokDetail(props) {

  const { _id } = useParams();
  const navigate = useNavigate();

  const [commentValue, setCommentValue] = useState();
  const [getDetailList, setGetDetailList] = useState();
  const [getDetailCommentList, setGetDetailCommentList] = useState();

  const 로그인중 = useSelector(getLoginUser) // 현재 로그인중 유저 정보

  useEffect(() => {
    const commentListGet = async () => {
      const response = await axios.get(`/community/toktok/detail/${_id}`)
      setGetDetailCommentList(response.data.commentData)
      setGetDetailList(response.data.postData)
    };
    commentListGet();
  }, []);

  const changeComment = (e) => {
    setCommentValue(e.target.value)
  }
  const handleComment = async () => {
    await axios.post(`/community/toktok/comment/${_id}`, { comment: commentValue, postId: _id, user: 로그인중 })
    window.location.reload()
  }
  const handleDel = async () => {
    await axios.delete(`/community/toktok/delete/${_id}`)
    navigate('/community/Toktok');
  }

  const date = new Date(getDetailList?.date);

  return (
    <ToktokDetailWrapper>
      <div className='titleContent'>
        <h4>{getDetailList?.title}</h4>
        <h5>{getDetailList?.user.signDogName} | {getDetailList?.user.signDogType}/{getDetailList?.user.signDogAge}살</h5>
        <h5>{date?.toString().slice(0, 21)}</h5>
        <p>{getDetailList?.content}</p>
        {<img src={getDetailList ? `${getDetailList?.imgUrl}` : ''} />}
      </div>

      <hr /><br />

      {getDetailCommentList?.map((testlistMap) => {
        return <ToktokDetailCommentItem
          key={testlistMap._id}
          commentId={testlistMap._id}
          comment={testlistMap.comment}
          user={testlistMap.user}
          date={testlistMap.date}
        />
      })}
      <button onClick={handleDel}>글삭제</button>
      <br />
      <br />
      <div>
        <label htmlFor='commentInput' />
        <input name='commentInput' className='c' value={commentValue} onChange={changeComment} />
        <button onClick={handleComment}>댓글입력</button>
      </div>
    </ToktokDetailWrapper>
  );
}

export default ToktokDetail;