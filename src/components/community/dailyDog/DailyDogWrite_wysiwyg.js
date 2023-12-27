import { AtomicBlockUtils, ContentState, EditorState, convertToRaw } from 'draft-js';
import React, { useCallback, useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import { useNavigate } from 'react-router-dom';
import draftToHtml from 'draftjs-to-html';
import { useDispatch, useSelector } from 'react-redux';
import { addListToDailyDog, selectDailyDogList } from '../../../features/dailyDogSlice';

const DailyDogWriteContainer = styled.div`
  max-width: 1200px;
  height: 800px;
  margin: 0 auto;
  margin-top: 60px;

  h1 {
    font-size: 28px;
    font-weight: bold;
  }

  .title {
    width: 100%;
    height: 40px;
    border: none;
    margin-top: 10px;
  }

  .editor {
    height: 580px;
  }

  .btnContainer {
    display: flex;
    justify-content: flex-end;

    button {
      margin: 16px 0 0 16px;
      padding: 6px 10px;
    }
  }
`;


function DailyDogWrite(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const abc = useSelector(selectDailyDogList);

  const [ title, setTitle ] = useState('');
  const [ editorState, setEditorState ] = useState(EditorState.createEmpty());
  


  // const onChangeField = useCallback((payload) => {dispatch(addListToDailyDog(payload))}, [dispatch]);

  const handleSubmit = () => {
    const values = {
        id: abc.length + 4,
        title,
        content: editorToHtml(editorState)
      };
  
    if (title && editorState) {
      dispatch(addListToDailyDog(values));
      navigate('/community/dailyDog/');
    } else {
      alert('다시 입력해주세요.');
    }
  }

  const editorToHtml = editorState => draftToHtml(convertToRaw(editorState.getCurrentContent()));
  
  const onEditorStateChange = (editorState) => {
    console.log(editorState);
    setEditorState(editorState);
    // onChangeField({
    //   id: 'content',
    //   title: editorToHtml(editorState),
    // });
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
    console.log(e.target.value);
  }

  function uploadImageCallBack(file) {
    return new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.imgur.com/3/image');
        xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
        const data = new FormData();
        data.append('image', file);
        xhr.send(data);
        xhr.addEventListener('load', () => {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        });
        xhr.addEventListener('error', () => {
          const error = JSON.parse(xhr.responseText);
          reject(error);
        });
      }
    );
  }

  // const onDrop = (acceptedFiles) => {
  //   const file = acceptedFiles[0];

  //   console.log(file);
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     const rawData = convertToRaw(editorState.getCurrentContent());
  //     const firstBlock = rawData.blocks[0];
  //     const hasEntityRanges = firstBlock && firstBlock.entityRanges && firstBlock.entityRanges.length > 0;
  //     const entityKey = hasEntityRanges ? firstBlock.entityRanges[0].key : null;

  //     const contentStateWithEntity = ContentState.createFromBlockArray(
  //       rawData.blocks,
  //       rawData.entityMap
  //     );

  //     const newContentState = contentStateWithEntity.createEntity('IMAGE', 'IMMUTABLE', {
  //       src: reader.result,
  //     });

  //     const newEntityKey = newContentState.getLastCreatedEntityKey();
  //     const newEditorState = EditorState.set(editorState, {
  //       currentContent: newContentState,
  //     });

  //     setEditorState(
  //       AtomicBlockUtils.insertAtomicBlock(newEditorState, newEntityKey, ' ')
  //     );
  //   };

  //   reader.readAsDataURL(file);
  // };


    
  // console.log(<div dangerouslySetInnerHTML={{__html: editorToHtml}}/>);
  return (
    <DailyDogWriteContainer>
        {/* <Dropzone onDrop={onDrop} accept="image/*">
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} style={{ border: '1px solid #ccc', padding: '20px' }}>
            <input {...getInputProps()} />
            <p>이미지를 첨부하세요.</p>
          </div>
        )}
      </Dropzone> */}
      <h1>데일리독</h1>
      <input type='text' className='title' onChange={handleTitleChange} value={title} placeholder='제목을 입력해주세요.'/>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editor"
        onEditorStateChange={onEditorStateChange}
        placeholder="내용을 입력해주세요."
        localization={{ locale: 'ko', }}
        toolbar={{ 
          image: { uploadImageCallBack : uploadImageCallBack, alt: { present: true, mandatory: true } },
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
      />
      <div className='btnContainer'>
        <button onClick={() => navigate(-1)}>취소</button>
        <button type='submit' onClick={handleSubmit}>등록</button>
        {/* <div dangerouslySetInnerHTML={{__html: editorToHtml}}/> */}
      </div>
    </DailyDogWriteContainer>
  );
}

export default DailyDogWrite;