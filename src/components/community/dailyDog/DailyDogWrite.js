import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addListToDailyDog, selectDailyDogList } from '../../../features/dailyDogSlice';
import axios from 'axios';

const DailyDogWriteContainer = styled.div`
  max-width: 1200px;
  min-height: 800px;
  margin: 70px auto;

  h1 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .tip-box {
    font-size: 13px;
    line-height: 26px;
    padding: 6px 0;
    color: #68a6fe;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    border: 1px solid #ccc;
    border-bottom: none;
    padding: 8px 25px;

    &:focus {
      outline: none;
    }
  }

  .btn-box {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;

    button {
      margin: 10px;
      padding: 6px 12px;
      border: none;
      background: #68a6fe;
      color: #fff;
    }
  }

   .ProseMirror-widget {
    background: #fff;
    font-size: 16px;
    cursor: text;
  }
`;

function DailyDogWrite(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const testList = useSelector(selectDailyDogList);

  const [ values, setValues ] = useState({
    title: '',
    content: '',
    img: [],
  });

  const { title, content, src } = values;

  const editorRef = useRef();

  // 이미지 파일명으로 가져오기
  const onUploadImage = async (blob, callback) => {
    console.log(blob);

  }
  
  const titleOnChange = (e) => {
   const title = e.target.value
   setValues(value => ({ ...value, title }));
  };

  const contentOnChange = () => {
    const content = editorRef.current?.getInstance().getHTML();
    console.log(content);
    let word = content.substring(content.indexOf('src')+5, content.indexOf('contenteditable')-2);
    if (word.length < 10) {
      word = '';
    }
    setValues(value => ({ ...value, content, src: word }));
  };

  const handleSubmitValue = async () => {

    if (title && content) {
      try {
        const formData = new FormData();

        formData.append('title', title);
        formData.append('content', content);
        formData.append('title', title);

        await axios.post('http://localhost:8888/community/daily/insert', { title, content, src })
        alert('게시글이 등록되었습니다.');
        navigate('/community/dailyDog');
      } catch (err) {
        console.error(err);
      }
    } else if (!title) {
      alert('제목을 입력해주세요.');
    } else if (!content) {
      alert('내용을 입력해주세요.');
    }

    // const newDaily = {
    //   id: testList.length + 1,
    //   title,
    //   content,
    //   src,
    // }

    // if (title && content) {
    //   dispatch(addListToDailyDog(newDaily));
    //   alert('게시글이 등록되었습니다.');
    //   navigate('/community/dailyDog');
    // } else if (!title) {
    //   alert('제목을 입력해주세요.');
    // } else if (!content) {
    //   alert('내용을 입력해주세요.');
    // }
  };



  // 이미지 첨부를 위한 코드
  // https://kim-hasa.tistory.com/133
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().removeHook('addImageBlobHook');
      editorRef.current.getInstance().addHook('addImageBlobHook', (blob, callback) => {
        (async () => {
          let formData = new FormData();
          formData.append('img', blob);

          await axios.post('http://localhost:8888/community/daily/insert', formData, {
            header: { 'content-type': 'multipart/formdata' },
            withCredentials: true,
          });

          const imageUrl = `https://finaltp.s3.ap-northeast-2.amazonaws.com/original/${Date.now()}_${blob.name}`;

          setValues(prevValue => ({ ...prevValue, img: imageUrl }));
          callback(imageUrl, 'img');
        })();

        return false;
      });
    }

    return () => {};
  }, [editorRef]);

  return (
    <DailyDogWriteContainer>
      <h1>데일리독</h1>
      <div className='tip-box'>
        <p>* 첫번째로 삽입한 이미지가 대표 이미지가 되며 업로드 시 이미지의 크기는 460*360으로 고정 됩니다.</p>
        <p>* 작성하신 글은 자동으로 가운데 정렬 됩니다.</p>
      </div>
      <input type='text' value={title} onChange={titleOnChange} placeholder='제목을 입력해주세요' />
      <Editor
        ref={editorRef}
        placeholder="내용을 입력해주세요."
        previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={false}
        language="ko-KR"
        plugins={[colorSyntax]}
        hideModeSwitch={true}
        onChange={contentOnChange}
        hooks={{addImageBlobHook: onUploadImage}}
      />  
      <div className='btn-box'>
        <button onClick={() => navigate(-1)}>취소</button>
        <button onClick={handleSubmitValue}>등록</button>
      </div>
    </DailyDogWriteContainer>
  );
}

export default DailyDogWrite;