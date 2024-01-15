import React, { useEffect, useState } from 'react';
import { getFleamarketById } from '../../../api/communityAPI';
import { useParams } from 'react-router';
import testImage from '../../../images/app.jpg'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectFleamarket } from '../../../features/dailyDogSlice';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrNext, GrPrevious } from "react-icons/gr";
import { useNavigate } from 'react-router';
import axios from 'axios';

const FleamarketDetailContainer = styled.div`
  max-width: 1200px;
  min-height: 800px;
  margin: 70px auto;

  .abcd {
    max-width: 600px;
    margin: 0 auto;

    .slick-prev, .slick-next {
      color: #000;
    }

    polyline {
      stroke-width: 3;
    }

    img {
      height: 360px;
      border: 1px solid #ccc;
    }

    .userinfo-box {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;

      p {
        /* font-weight: bold; */
        span {
          font-weight: bold;
        }
      }

      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
        border-radius: 50%;
      }

      .user-box {
        display: flex;
        align-items: center;
      }
      
      .side-box {
        display: flex;
        align-items: center;

        p {
          margin-left: 10px;
          font-size: 14px;
        }
      }
    }

    .iteminfo-box {
      margin-top: 20px;

      p:last-child {
        margin-top: 50px;
      }

      p {
        font-size: 18px;
        margin-bottom: 10px;
        

        span {
          font-weight: bold;
        }
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
  }
`;

function FleamarketDetail(props) {
  const navigate = useNavigate();
  const [ item, setItem ] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fleamarketData = async () => {
      try {
        const response = await axios.get('https://port-0-finalprojectserver-1efqtf2dlrehr9d7.sel5.cloudtype.app/vintage');        
        setItem(response.data.filter(item => item.id == id));
      } catch (err) {
        console.error(err);
      }
    }
    fleamarketData();
  }, [])

  if (!item) {
    return null;
  } 
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <GrNext />,
    prevArrow: <GrPrevious />,
  };


  // 채팅하기 더미 테스트
  const toChat = 'hosik'
  return (
    <FleamarketDetailContainer>
      <div className='abcd'>
        <Slider {...settings}>
          {item[0].imgUrl
            ? item[0].imgUrl.map((srcItem, index) => 
                <div key={index}>
                  <img
                    src={srcItem}
                    style={{ width: '100%' }}
                  />
                </div>
              )
            : 
              <div>
                <img
                src={testImage}
                style={{ width: '100%' }}
                />
              </div>
          }
        </Slider>
        <div className='userinfo-box'>
          <div className='user-box'>
            <img src='https://i.namu.wiki/i/Bge3xnYd4kRe_IKbm2uqxlhQJij2SngwNssjpjaOyOqoRhQlNwLrR2ZiK-JWJ2b99RGcSxDaZ2UCI7fiv4IDDQ.webp'></img>
            <p>{item[0].user}</p>
          </div>
          <div className='side-box'>
            <p><span>등록일</span> 2023.12.29</p>
            <p><span>조회수</span> 14</p>
            <p><span>채팅</span> 2</p>
          </div>
        </div>
        <div className='iteminfo-box'>
          <p><span>{item[0].title}</span></p>
          <p>{item[0].category}</p>
          <p><span>{Number(item[0].price).toLocaleString('kr-KR')}원</span></p>
          <p>{item[0].place}</p>
          <p>{item[0].content}</p>
        </div>
        <div className='btn-box'>
          <button onClick={() => navigate(`/user/chatting/${item[0].user}`)}>채팅하기</button>
        </div>
      </div>
    </FleamarketDetailContainer>
  );
}

export default FleamarketDetail;