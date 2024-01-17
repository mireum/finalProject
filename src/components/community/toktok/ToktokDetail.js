import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ToktokDetailCommentItem from './ToktokDetailCommentItem';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getLoginUser } from '../../../features/userInfoSlice';

const ToktokDetailWrapper = styled.div`
  background-color: #ccc;
  .a {
    background-color: #505050;
    height: 200px;
  }
  .b {
    height: 50px;
  }
  .c {
    width: 100%;
    height: 50px;
  }
`;

function ToktokDetail(props) {

  const commentTest = [
    {
      postId: '001',
      name: '준우',
      content: '이이야이야111'
    },
    {
      postId: '002',
      name: '하은',
      content: '이이야이야222'
    },
    {
      postId: '003',
      name: '민수',
      content: '이이야이야333'
    },
    {
      postId: '001',
      name: '지우최고',
      content: '이이야이야444'
    },
  ]
  // user,     댓글 DB
  // userId,
  // comment,
  // date,
  // postId: new ObjectId(postId),
  // type: 'talk'

  //   _id     
  // 유저아이디
  // 댓글내용
  // 날짜
  // 게시글아디
  // 타입은 커뮤 너네 머 자랑 / 육아 있다길래 나눠놓은거임   파람스로 요청시 같이ㄱㄱ 

  const { _id } = useParams();

  const [commentValue, setCommentValue] = useState();
  const [getDetailCommentList, setGetDetailCommentList] = useState();
  const [getDetailList, setGetDetailList] = useState();

  const 로그인중 = useSelector(getLoginUser) // 현재 로그인중 유저 정보
  useEffect(() => {
    const commentListGet = async () => {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/community/toktok/detail/${_id}`)
      setGetDetailCommentList(response.data.commentData)
      setGetDetailList(response.data.postData)
    };
    commentListGet();
  }, []);
  console.log(getDetailList);

  const changeComment = (e) => {
    setCommentValue(e.target.value)
  }
  const handleComment = async () => {
    await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/community/toktok/comment/${_id}`, { comment: commentValue, postId: _id, user: 로그인중 })
    window.location.reload()
  }

  const commentFilter = commentTest.filter((id) => { // 게시글 _id 댓글 postId 필터링
    return (id.postId === _id)
  })

  return (
    <ToktokDetailWrapper>
      {_id}
      <div className='a'>
        {getDetailList?.title}
        <hr />
        {getDetailList?.content}
      </div>
      <hr /><br />

      {getDetailCommentList?.map((testlistMap) => {
        return <ToktokDetailCommentItem
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
    </ToktokDetailWrapper>
  );
}

export default ToktokDetail;