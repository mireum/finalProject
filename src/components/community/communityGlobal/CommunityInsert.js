import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getLoginUser } from '../../../features/userInfoSlice';

const CommunityInsertWrapper = styled.div`
  background-color: #ccc;
  .a {
    background-color: #f0f0f0;
    height: 30px;
  }
  .b {
    display: flex;
    flex-flow: column;
    input, textarea {
      padding: 10px 0 ;
      margin: 10px 0;
      background-color: aliceblue;
    }
  }
`;

function CommunityInsert(props) {

  const [insertTitle, setInsertTitle] = useState();
  const [insertContent, setInsertContent] = useState();

  const { insertPage } = useParams();
  const 로그인중 = useSelector(getLoginUser) // 현재 로그인중 유저 정보

  const changeTitle = (e) => {
    setInsertTitle(e.target.value)
  }
  const changeContent = (e) => {
    setInsertContent(e.target.value)
  }

  const formDataList = async () => {
    try {
      const formData = new FormData();
      formData.append('title', insertTitle);
      formData.append('content', insertContent);
      const img = (document.querySelector('#imgUrl').files[0]);
      formData.append('imgUrl', img);

      const result = await axios.post(`/community/${insertPage}/insert`, formData, 로그인중);
      console.log(result.data);
      if (!result.data.flag) {
        return alert(result.data.message);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <CommunityInsertWrapper>
      <div className='b'>
        <label htmlFor='title' />
        <input
          type='text'
          id='title'
          name='title'
          value={insertTitle}
          onChange={changeTitle}
          placeholder='제목 입력' />

        <label htmlFor='title' />
        <textarea
          type='text'
          id='content'
          name='content'
          value={insertContent}
          onChange={changeContent}
          placeholder='내용 입력' />

        <label htmlFor='imgUrl' />
        <input
          type='file'
          accept='image/*'
          id='imgUrl'
          name='imgUrl'
        />

        <button
          onClick={() => {
            formDataList();
          }}
        >글등록</button>
      </div>
    </CommunityInsertWrapper>
  );
}

export default CommunityInsert;