import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiPlusCircle } from "react-icons/fi";
import { addItemToFleamarket, selectFleamarket } from '../../../features/dailyDogSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

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

    .add-images {
      cursor: pointer;
      width: 120px;
      height: 120px;
      border: 1px solid #68a6fe;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      color: #68a6fe;
    }

    #images {
      display: none;
    }
  }

  .write-form {
    width: 55%;
    margin: 0 auto;
    
    input, textarea, select {
      margin-bottom: 10px;
      padding: 8px 10px;
      border: 1px solid #ccc;

      &:focus {
        outline: none;
      } 
    }

    span {
      margin-right: 8px;
      font-weight: bold;
    }

    .text-box {

      .typeInner-box {
        width: 50%;
      }

      .content-title {
        vertical-align: top;
      }

      label {
        width: 100%;

        input {
          width: 93.5%;
        }

        textarea {
          width: 93.5%;
          min-height: 400px;
          resize: none;
        }
      }


    }

    .type-box {
      display: flex;

      #price {
        margin-right: 10px;
      }
      
    }

    .btn-box {
      margin: 0 auto;
      margin-right: 4px;
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
  }
`;

function FleamarketWrite(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const testList = useSelector(selectFleamarket);

  const [ values, setValues ] = useState(
    {
      id: '',
      title: '',
      price: '',
      category: '',
      place: '',
      content: '',
    }
  );
  const [ images, setImages ] = useState([]);
  const [ sendImages, setSendImages ] = useState([]);
  const [ imagesLimit, setImagesLimit ] = useState([]);
  const [ represent, setRepresent ] = useState(images[0]);

  const { id, title, price, category, place, content } = values;

  useEffect(() => {
    const fleamarketData = async () => {
      try {
        const response = await axios.get('http://localhost:8888/vintage');
        setValues(prevValue => ({ ...prevValue, id: response.data ? response.data.length + 1 : 1 }));
      } catch (err) {
        console.error(err);
      }
    }
    fleamarketData();
  }, [])

  const handleFileChange = async (e) => {
    const files = e.target.files;
    setSendImages(prevSendImg => [...prevSendImg, ...files]);

    if (files && files.length > 0) {
      if (images.length + files.length <= 5) {
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
        return alert('사진은 최대 5장까지 첨부 가능합니다.');
      }
    }
  };

  const handleClickImage = (src) => {
    setRepresent(src);
  }

  const contentOnChange = (e) => {
    const { name, value } = e.target;
    setValues(prevValue => ({ ...prevValue, [name]: value }));
  }

  console.log(id);

  const handleSubmitValue = async () => {

    const formData = new FormData();

    formData.append('id', id);
    formData.append('title', title);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('place', place);
    formData.append('content', content);
    for (const image of sendImages) {
      formData.append('img', image);
    }

    if (title && price && category && place && content && images[0]) {
      try {
        axios.post('http://localhost:8888/vintage/insert', formData)
        alert('게시글이 등록되었습니다.');
        navigate('/community/Fleamarket');
      } catch (err) {
        console.error(err);
      } 
    } else if (!images[0]) {
      alert('최소 1장 이상의 사진을 첨부해주세요.');
    } else if (!title) {
      alert('제목을 입력해주세요.');
    } else if (!price) {
      alert('가격을 입력해주세요.');
    } else if (!category) {
      alert('카테고리를 정해주세요.');
    } else if (!place) {
      alert('장소를 입력해주세요.');
    } else if (!content) {
      alert('내용을 입력해주세요.');
    }
    
    // const newItem = {
    //   id: testList.length + 1,
    //   title,
    //   price,
    //   category,
    //   place,
    //   content,
    //   src: images,
    // }

    // if (title && price && category && place && content && images[0]) {
    //   dispatch(addItemToFleamarket(newItem));
    //   alert('게시글이 등록되었습니다.');
    //   navigate('/community/Fleamarket');
    // } else if (!images[0]) {
    //   alert('최소 1장 이상의 사진을 첨부해주세요.');
    // } else if (!title) {
    //   alert('제목을 입력해주세요.');
    // } else if (!price) {
    //   alert('가격을 입력해주세요.');
    // } else if (!category) {
    //   alert('카테고리를 정해주세요.');
    // } else if (!place) {
    //   alert('장소를 입력해주세요.');
    // } else if (!content) {
    //   alert('내용을 입력해주세요.');
    // }
  }

  return (
    <FleamarketWriteContainer>
      <h1>중고거래</h1>
      <div className='tip-box'>
        <p>* 첫번째로 삽입한 사진 대표 사진이 되며 업로드 시 이미지의 크기는 600*360으로 고정 됩니다.</p>
        <p>* 사진은 최대 5장까지 첨부 가능합니다.</p>
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
          ? 
            <>
              <label className='add-images' for='images' title='사진추가'>
                <FiPlusCircle />
              </label>
              <input type='file' id='images' onChange={handleFileChange} multiple/>  
            </>
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
          <div className='typeInner-box'>
            <label for='price'>
              <span>가격</span>
              <input id='price' type='number' name='price' onChange={contentOnChange}/>
            </label>
          </div>
          <div className='typeInner-box'>
            <span>카테고리</span>
              <select name='category' onChange={contentOnChange}>
                <option value=''>선택</option>
                <option value='feed'>사료</option>
                <option value='snack/nutritional'>간식/영양제</option>
                <option value='bowel/hygiene'>배변/위생</option>
                <option value='walk/play'>산책/놀이</option>
              </select>
          </div>
        </div>
        <div className='text-box'>
          <label>
            <span>장소</span>
            <input type='text' name='place' onChange={contentOnChange}/>
          </label>
        </div>
        <div className='text-box'>
          <label for='content'>
            <span className='content-title'>내용</span>
            <textarea id='content' name='content' onChange={contentOnChange}/>
          </label>
        </div>
        <div className='btn-box'>
          <button onClick={() => navigate(-1)}>취소</button>
          <button onClick={handleSubmitValue}>등록</button>
        </div>
      </div>
    </FleamarketWriteContainer>
  );
}

export default FleamarketWrite;