import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

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
  const [insertImg, setInsertImg] = useState();

  const changeTitle = (e) => {
    setInsertTitle(e.target.value)
  }
  const changeContent = (e) => {
    setInsertContent(e.target.value)
  }
  const changeImg = async (e) => {
    setInsertImg(e.target.value)
  }
  const formDataList = async () => {
    try {
      const formData = new FormData();
      formData.append('title', insertTitle);
      formData.append('content', insertContent);
      formData.append('img', insertImg[0]);

      const result = await axios.post('/주소솟소소소소소소솟솟', formData);
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

        <label htmlFor='img' />
        <input
          type='file'
          accept='image/*'
          id='img'
          name='img'
          value={insertImg}
          onChange={changeImg} />

        <button
          onClick={formDataList}
        >글등록</button>
      </div>
    </CommunityInsertWrapper>
  );
}

export default CommunityInsert;