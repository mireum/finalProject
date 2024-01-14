import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  console.log(_id);

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
  const handleDel = async() => {
    await axios.delete(`/community/toktok/delete/${_id}`)
  }

  const date = new Date(getDetailList?.date);

console.log(getDetailList);
  return (
    <ToktokDetailWrapper>
      <div className='titleContent'>
        <h4>{getDetailList?.title}</h4>
        <h5>{getDetailList?.user.signDogName} | {getDetailList?.user.signDogType}/{getDetailList?.user.signDogAge}살</h5>
        <h5>{date?.toString()}</h5>
        <p>{getDetailList?.content}</p>
        {<img src={`${getDetailList?.imgUrl}`}/>}
      </div>
      
      <hr /><br />

      {getDetailCommentList?.map((testlistMap) => {
        return <ToktokDetailCommentItem
          commentId={testlistMap._id}
          comment={testlistMap.comment}
          user={testlistMap.user}
          date={testlistMap.date}
        />
      })}
      <div>
        <label htmlFor='commentInput' />
        <input name='commentInput' className='c' value={commentValue} onChange={changeComment} />
        <button onClick={handleComment}>댓글입력</button>
      </div>
      <button onClick={handleDel}>삭제</button>
    </ToktokDetailWrapper>
  );
}

export default ToktokDetail;