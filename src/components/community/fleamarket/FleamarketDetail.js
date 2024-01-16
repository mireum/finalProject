import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import testImage from '../../../images/app.jpg'
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GrNext, GrPrevious } from "react-icons/gr";
import { useNavigate } from 'react-router';
import axios from 'axios';
import { dateFormat } from '../../../util';

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

      .iteminfo-content {
        color: #222;
        opacity: 0.8;
        font-size: 15px;
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

const mappings = {
  feed: '사료',
  snackNutritional: '간식/영양제',
  bowelHygiene: '배변/위생',
  walkPlay: '산책/놀이',
  seoul: '서울특별시',
  gyeonggi: '경기도',
  incheon: '인천광역시',
  daejeon: '대전광역시',
  daegu: '대구광역시',
  gwangju: '광주광역시',
  busan: '부산광역시',
  gangwon: '강원도',
  ulsan: '울산광역시',
  jeju: '제주특별자치도'
}

function FleamarketDetail(props) {
  const navigate = useNavigate();
  const [ item, setItem ] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const fleamarketData = async () => {
      try {
        const response = await axios.get(`http://localhost:8888/vintage/detail/${id}`);        
        console.log(response.data);
        setItem(response.data.postData);

        // const response = await axios.get('https://port-0-finalprojectserver-1efqtf2dlrehr9d7.sel5.cloudtype.app/vintage');        
        // setItem(response.data.filter(item => item.id == id));

      } catch (err) {
        console.error(err);
      }
    }
    fleamarketData();
  }, [])

  if (!item) {
    return null;
  } 

  console.log(item);
  
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
          {item.imgUrl
            ? item.imgUrl.map((srcItem, index) => 
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
            <p>{item.author}</p>
            {/* <p>{item[0].user}</p> */}
          </div>
          <div className='side-box'>
            <p><span>등록일</span> {dateFormat(item.date)}</p>
            <p><span>조회수</span> {item.view}</p>
            <p><span>채팅</span> {item.chat.length}</p>
          </div>
        </div>
        <div className='iteminfo-box'>
          <p className='iteminfo-content'>{mappings[item.category]} / {mappings[item.area]}</p>
          <p><span>{item.title}</span></p>
          <p><span>{Number(item.price).toLocaleString('kr-KR')}원</span></p>
          <p>{item.content}</p>
        </div>
        <div className='btn-box'>
          <button onClick={() => navigate(`/user/chatting/${item[0].user}`)}>채팅하기</button>
        </div>
      </div>
    </FleamarketDetailContainer>
  );
}

export default FleamarketDetail;