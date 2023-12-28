import React, { useState } from 'react';
import styled from 'styled-components';

const FleamarketWriteContainer = styled.div`
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

  img {
    width: 120px;
    height: 120px;
    margin-right: 10px;
    border: 1px solid #68a6fe;
  }
  
  .img-box {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .write-form {
    width: 55%;
    margin: 0 auto;
    
    input, textarea, select {

      &:focus {
        outline: none;
      } 
    }

    .text-box {

      label {
        width: 100%;

        input {
          width: 90%;
        }

        textarea {
          width: 100%;
          min-height: 400px;
        }
      }
    }

    .type-box {
      display: flex;
    }
  }
`;

function FleamarketWrite(props) {
  const [ values, setValues ] = useState(
    {
      title: '',
      content: '',
    }
  );
  const [ images, setImages ] = useState([]);
  const [ represent, setRepresent ] = useState(images[0]);

  const { title, content } = values;

  const handleFileChange = async (e) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      if (images.length <= 5 && files.length <= 5) {
        const newImage = [];

        Array.from(files).forEach(file => {
          const reader = new FileReader();

          reader.onloadend = () => {
            newImage.push(reader.result);

            if (newImage.length === files.length) {
              setImages(prevImage => [...prevImage, ...newImage]);
            }
          };

          reader.readAsDataURL(file);
        })
      } else {
        return alert('이미지는 최대 5장까지 첨부 가능합니다.');
      }
    }
  };

  console.log(images);

  const handleClickImage = (src) => {
    setRepresent(src);
  }

  const contentOnChange = (e) => {
    const { name, value } = e.target;
    setValues(prevValue => ({ ...prevValue, [name]: value }));
  }

  return (
    <FleamarketWriteContainer>
      <h1>중고거래</h1>
      <div className='tip-box'>
        <p>* 첫번째로 삽입한 사진 대표 사진이 되며 업로드 시 이미지의 크기는 460*300으로 고정 됩니다.</p>
        <p>* 사진은 최대 5장까지 첨부가 가능합니다.</p>
      </div>
      <div className='img-box'>
        {images && images.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <img src={item} onClick={() => handleClickImage(item)} /> 
            </React.Fragment>
          )
        })}
        {images.length < 5 
          ? <input type='file' id='images' onChange={handleFileChange} multiple/>
          : null
        }
      </div>
      <div className='write-form'>
        <div className='text-box'>
          <label>
            <span>제목</span>
            <input type='text' name='title' onChange={contentOnChange}/>
          </label>
        </div>
        <div className='type-box'>
          <div>
            <label>
              <span>가격</span>
              <input type='number' />
            </label>
          </div>
          <div>
            <span>카테고리</span>
              <select>
                <option>선택</option>
                <option>사료</option>
                <option>간식/영양제</option>
                <option>배변/위생</option>
                <option>산책/놀이</option>
              </select>
          </div>
        </div>
        <div className='text-box'>
          <label>
            <span>내용</span>
            <textarea name='content' onChange={contentOnChange}/>
          </label>
        </div>
      </div>
    </FleamarketWriteContainer>
  );
}

export default FleamarketWrite;