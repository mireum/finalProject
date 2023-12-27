import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addToktokList } from '../../../features/toktokSlice';

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
  const dispatch = useDispatch()

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
  const testImgUp = async (e) => {
    try {
      const formData = new FormData(); // multipart/form-data 타입으로 보냄
      formData.append('img', e.target.img.files[0]);

      const result = await axios.post('/post/write', formData);
      console.log(result.data);

      if (!result.data.flag) {
        return alert(result.data.message);
      }
    } catch (err) {
      console.error(err);
    }
  }


  const testList = {
    insertTitle,
    insertContent,
    insertImg
  }
  const testListDis = () => {
    dispatch(addToktokList(testList))
  }



  return (
    <CommunityInsertWrapper>
      <div className='b'>
        <label htmlFor='title' />
        <input
          type='text'
          id='title'
          value={insertTitle}
          onChange={changeTitle}
          placeholder='제목 입력' />

        <label htmlFor='title' />
        <textarea
          type='text'
          id='content'
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
          onClick={testListDis}
        >글등록</button>
      </div>
    </CommunityInsertWrapper>
  );
}

export default CommunityInsert;