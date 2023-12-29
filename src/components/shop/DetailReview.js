import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdDelete } from "react-icons/md";
import { dateFormat } from '../../util';
import { useNavigate } from 'react-router-dom';
import Star from './Star';
import StarStar from './StarStar';

const ReviewContainer = styled.div`
  margin: 0 auto;
  width: 83%;

  .review-wrap h3 {
    font-size: 30px;
    font-weight: bold;
    color: #68a6fe;
    margin-top: 20px;
  }
  p.title-sub {
    margin: 10px 0px;
  }
  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
  }
  .review-wrap {
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  .review-wrap p {
    margin-top: 10px;
  }
  
  button.review-btn  {
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    background-color: #68a6fe;
    border: none;
    border-radius: 10px;
  }
  .review-wrap button:active {
    background-color: #4290fc;
  }
  hr {
  }
  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    background-color: #ececec;
    padding: 5px 10px;
    border-radius: 10px;
  }
  .list div img {
    width: 180px;
    height: 180px;
    border-radius: 10px;
  }
  .list .titlewrap {
    width: 600px;
  }
  .list div:nth-child(1) {
    margin-bottom: 5px;
  }
  .list .delete-btn {
    display: inline-block;
    border: none;
    background-color: #b4bdff;
    color: #fff;
    border-radius: 10px;
    font-size: 18px;
    padding: 0px 10px;
    text-align: center;
  }
  .list .userId {
    font-size: 20px;
    font-weight: bold;
    color: #666;
    margin-bottom: 5px;
  }
  .list span.date {
    font-size: 16px;
    font-weight: 400;
    margin-left: 20px;

  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
    textarea {
      width: 100%;
      height: 55%;
      margin: 20px 0px 10px;
      outline: none;
      resize: none;
      font-size: 18px;
      border-radius: 10px;

    }
    button {
    width: 48%;
    margin: 20px 0;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    background-color: #68a6fe;
    border: none;
    padding: 10px 0px;
    border-radius: 10px;
    }
    button:active {
      background-color: #4290fc;
    }
    .modal-wrap {
      position: absolute;
      width: 50%;
      margin: 0 auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%); 

    }
    .modal-wrap form {
      width: 600px;
      height: 800px;
      /* height: 100%; */
      padding: 40px;
      margin: 0 auto;
      background-color: #ececec;
      border-radius: 15px;
      box-sizing: border-box;
    }
    .modal-wrap div {
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
    }
    .modal-wrap input {
      width: 70%;
    }
    .modal-wrap form h3 {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 20px;
      text-align: center;
    }
    .modal-wrap .starwrap {
      flex-direction: column;
    }
    .modal-wrap .starwrap p {
      text-align: center;
      margin: 10px 0;
    }
    .modal-wrap p {
      margin-bottom: 10px;
    }
    .modal-wrap p {
      font-weight: bold;
      color: #555;
      font-size: 18px;
    }
    .modal-wrap .brand,
    .modal-wrap .item {
      background-color: #68a6fe;
      color: #fff;
      padding: 5px 10px 0;
      border-radius: 5px;
    }
    .modal-wrap .item {
      width: 84px;
      text-align: center;
    }
    .modal-wrap .input {
      /* margin-left: 10px; */
      width: 80%;
      outline: none;
    }
    .modal-wrap .filebox {
      display: flex;
      justify-content: space-between;
    }
    .modal-wrap .filebox .upload-name {
      outline: none;
      border: 1px solid #777;
      padding: 5px;
      width: 75%;
      border-radius: 10px;
    }
    .modal-wrap .btn-img {
      background-color: #68a6fe;
      color: #fff;
      background-color: #68a6fe;
      padding: 7px 5px;
      width: 23%;
      border-radius: 10px;
      text-align: center;
      font-weight: bold;
    }
    .modal-wrap .btn-wrap {
      display: flex;
      justify-content: space-between;
    }
    .modal-wrap .btn-wrap button.close {
      border: 1px solid #68a6fe;
      background-color: #fff;
      color: #333;
    }
`;

const review1 = [
  {
    id: 'haeun',
    date: new Date(),
    content: '강아지가 잘 먹어요 ㅎㅎ',
    image: 'data:image/jpeg;base64,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',
    // star: [true, true, true, true, true ]
    star: [true, true, false, false, false]
  },
  {
    id: 'haeun2',
    date: new Date(),
    content: '맛있네요 ',
    image: 'data:image/jpeg;base64,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',
    star: [true, true, true, true, true ]

  },
  {
    id: 'haeun3',
    date: new Date(),
    content: '비숑 사료 굿!',
    image: 'data:image/jpeg;base64,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',
    star: [true, true, true, true, false ]

  },
];

function DetailReview(props) {
  const [review, setReview] = useState('');
  const [reviewList, setReviewList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [star, setStar] = useState('');

  const navigate = useNavigate();

  const handleStar = (rate) => {
    setStar(rate);
  };
  console.log(star);


  // useEffect(() => {
  //   const list = async () => {
  //     try {
  //       const result = await axios.post('라우터 주소', { productId });
  //       setReviewList(result.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  // }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!review) {
        return alert('내용을 입력해주세요!');
      }
      const formData = new FormData();
      const fileList = e.target.image.files[0];
      console.log(fileList);
      for (const file of fileList) {
        formData.append('image', file);
      }
      const result = await axios.post('라우터 주소', { review, star, formData });
      // const result = await axios.get('라우터 주소', );
      setReviewList(result.data);
    } catch (err) {
      console.error(err);
    }
    setReview('');
    setModalOpen(false);
  };
  
  // 삭제?
  // const handleReviewDelete = async (id) => {
  //   try {
  //     await axios.post('라우터주소', { id, user });
  //     const result = await axios.get('라우터주소', { params: { aa: _id } });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const openModal = () => {
    // if (!result.data.user) {
    //   alert('로그인이 필요합니다!');
    // navigate('/login');
    // }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  
  return (
    <>
      <ReviewContainer>
        <div className='wrap'>
          <div className='review-wrap'>
            <h3 className='review-title'>상품 리뷰📦</h3>
            <p className='title-sub'>다양한 리뷰를 확인해보세요!</p>       
          </div>
          <button type='button' className='cursor-pointer review-btn' onClick={openModal} >리뷰 작성</button>
        </div>
        
        <hr />
        
        { review1.length > 0 && (
          review1 && review1.map((item, index) => {
            return (
              <div className='list' key={index}>
                <div><img src={item.image}/></div>
                <div className='titlewrap'>
                  <p><StarStar star={item.star}/></p>
                  {/* <p>{item.star}</p> */}
                  <p className='userId'>{item.id}<span className='date'>{dateFormat(item.date)}</span></p>
                  <p>{item.content}</p>
                </div>
                <div>
                  <button className='delete-btn cursor-pointer'><MdDelete /></button>
                </div>
              </div>
            )
          })
        )}
      </ReviewContainer>
      {modalOpen && 
        <Modal review={review} setReview={setReview}>
          <div className='modal-wrap'>
            <form>
              <h3>리뷰 작성📝</h3>
              <div className='starwrap'>
                <p>상품을 사용해보셨나요?</p>
                <div><Star handleStar={handleStar}/></div>
              </div>
              <div>
                <label name='brand' className='brand'>브랜드명</label>
                <input type='text' name='brand' className='input' readOnly />
                {/* {result.data.브랜드명} */}
              </div>
              <div>
                <label className='item'>상품명</label>
                <input type='text' name='brand' className='input' readOnly />
                {/* {result.data.상품명} */}
              </div>
              
              <textarea 
                spellCheck="false" 
                placeholder='리뷰를 작성해주세요 :)'
                value={review}
                onChange={(e) => {setReview(e.target.value)}}
              />
              <div className='filebox'>
                <input type='file' name="image" id='file_upload' multiple />
              </div>
              
              <div className='btn-wrap'>
                <button type='submit' className='cursor-pointer' onClick={handleSubmit} >리뷰 등록</button>
                <button type='button' className='close cursor-pointer' onClick={closeModal} >취소</button>
              </div>
            </form>
          </div> 
        </Modal>
      }
    </>
  );
}

export default DetailReview;