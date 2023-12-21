import React, { useState } from 'react';
import { CommunityInsertWrapper } from '../../css/Community';

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
  const changeImg = (e) => {
    setInsertImg(e.target.value)
  }
  console.log(insertImg);

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

        <label htmlFor='imgPath' />
        <input
          type='file'
          accept='image/*'
          id='imgPath'
          value={insertImg}
          onChange={changeImg} />
      </div>
    </CommunityInsertWrapper>
  );
}

export default CommunityInsert;