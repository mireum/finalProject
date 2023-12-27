import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ToktokDetailCommentItem from './ToktokDetailCommentItem';
import styled from 'styled-components';
import axios from 'axios';

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
      name: '준우',
      content: '이이야이야111'
    },
    {
      name: '하은',
      content: '이이야이야222'
    },
    {
      name: '민수',
      content: '이이야이야333'
    },
    {
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

  const { author } = useParams();

  const [commentValue, setCommentValue] = useState();

  const changeComment = (e) => {
    setCommentValue(e.target.value)
  }
  const handleComment = async () => {
    await axios.post('/댓글입력DB로 슈슈슛규슈슈슈슈윳')
  }

  return (
    <ToktokDetailWrapper>
      {author}의 디테일 페이지지임임임임
      <div className='a'>
        사진 게시글 등등
      </div>
      <hr /><br />

      {commentTest.map((testlistMap) => {
        return <ToktokDetailCommentItem
          name={testlistMap.name}
          content={testlistMap.content}
        />
      })}
      <div>
        <label />
        <input className='c' value={commentValue} onChange={changeComment} />
        <button onClick={handleComment}>댓글입력</button>
      </div>
    </ToktokDetailWrapper>
  );
}

export default ToktokDetail;