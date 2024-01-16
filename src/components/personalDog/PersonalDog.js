import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getLoginUser } from '../../features/userInfoSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import KakaoMap from '../KakaoMap';

const PersonalDogWrapper = styled.div`
  max-width: 1200px;
  min-height: 800px;
  margin: 70px auto;
  padding: 0 20px;
  h1 {
    font-size: 44px;
    font-weight: bold;
    color: #000;
  }
  h2 {
    padding: 10px 0;
    font-size: 24px;
  }
  .hrDiv {
    margin: 80px 0;
  }
  .ListBox {
    text-align: center;
    margin: 30px 0;
    display: flex;
    justify-content: center;
    h4{
      font-size: 24px;
      margin-bottom: 35px;
      border-bottom: 2px solid #eee;
      padding-bottom: 20px;
    }
    .toktok {
      max-width: 300px;
      margin: 0 30px;
      flex: 1;
      font-size: 12px;
    }
    .daily {
      max-width: 300px;
      margin: 0 30px;
      flex: 1;
      font-size: 12px;
    }
    .shop {
      max-width: 300px;
      margin: 0 30px;
      flex: 1;
      font-size: 10px;
    }
    .slider {
      margin-bottom: 30px;
      border-left: 2px solid greenyellow;
      line-height: 100px;
      width: 300px;
      height: 100px;
      background-color: #F8F9EF;
      .sliderItem {
        display: flex;
        flex-flow: row;
        text-align: center;
      }
      p {
        flex: 1;
      }
      img {
        flex: 1;
        max-height: 80px;
        max-width: 120px;
        margin: auto 0;
      }
    }


    .KaKaoMap{
      width: 900px;
    }
  }
`;

function PersonalDog(props) {
  const 로그인중 = useSelector(getLoginUser); // 현재 로그인중 유저 정보

  const [getPersonalDog, setGetPersonalDog] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const commentListGet = async () => {
      const response = await axios.get('/community/toktok/PersonalDog');
      setGetPersonalDog(response.data);
    };
    commentListGet();
  }, []);
  console.log(getPersonalDog);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 3,
    // slidesPerRow: 2
  }


  return (
    <PersonalDogWrapper>
      <h1>{로그인중?.signDogName}</h1>
      <br /><br />
      <h2>{로그인중?.signDogName}과(와)의 생활 중 고민거리, 궁금증이 있으신가요? 저희가 알려드릴게요!</h2>
      <br /><hr />
      <div className='ListBox'>

        <div className='toktok'>
          <h4>육아톡톡</h4>
          <Slider {...settings}>
            {getPersonalDog?.toktokPostFilter.map((a) => {
              return (
                <div className='slider' onClick={() => { navigate(`/community/Toktok/${a._id}`) }} >
                  <div className='sliderItem'><p>{a.title}</p><img src={`${a.imgUrl}`} /></div>
                </div>
              )
            })}
          </Slider>
        </div>

        <div className='daily'>
          <h4>중고장터</h4>
          <Slider {...settings}>
            {getPersonalDog?.vinPostFilter.map((a) => {
              return (
                <div className='slider' onClick={() => { navigate(`/community/dailydog/detail/${a.id}`) }} >
                  <div className='sliderItem'><p>{a.title}</p><img src={`${a.imgUrl}`} /></div>
                </div>
              )
            })}
          </Slider>

        </div>

        <div className='shop'>
          <h4>샵</h4>
          <Slider {...settings}>
            {getPersonalDog?.shopPostFilter.map((a) => {
              return (
                <div className='slider' onClick={() => { navigate(`/shop/detail/${a._id}`) }} >
                  <div className='sliderItem'><p>{a.title}</p><img src={`${a.imgUrl}`} /></div>
                </div>
              )
            })}
          </Slider>
        </div>

      </div>

      <div className='hrDiv'>
        <hr />
        <hr />
      </div>

      <div className='ListBox'>
        <div className='typeAgeInfo'>
          <h4>강아지 나이별 종별 정보</h4>
          <p>허스키는 살랴살랴살랴숑</p>
          <p>이 나이의 허스키는 어쩌구구</p>
          <p>이 무게의 허스키는 이렇구구</p>
        </div>
      </div>


      <div className='hrDiv'>
        <hr />
        <hr />
      </div>

      <div className='ListBox'>
        <div>
          <h4>여긴 뭘쓸까</h4> {/* 이건 진짜 뭐하노 */}
          <p>ㅇㅁㅇㅁㅇㅁㅇㄴㅁㅇㅁ</p>
          <p>ㅇㅁㅇㅁㅇㅁㅇㄴㅁㅇㅁ</p>
          <p>ㅇㅁㅇㅁㅇㅁㅇㄴㅁㅇㅁ</p>
        </div>
      </div>

      <div className='hrDiv'>
        <hr />
        <hr />
      </div>

      <div className='ListBox'>
        <div className='KaKaoMap'>
          <h4>{로그인중?.signDogName}의 산책로 검색</h4>  {/* 지도로 산책로 찾기? */}
          <KakaoMap />
        </div>
      </div>

      {/* 견종, 나이별 맞춤제품/
        각종 게시글 취합..?/
        산책로 추천/
        꺼무위키 정보..?/
        블로그 추천..?/
        등등...뭐가 있지/
        ????????????????
      필요한거:
      쇼핑몰 맞춤 제품 구분할때 들어가는 데이터 소중대에서 나이,자견,성견,노견으로 바꿔야 할듯
      맞춤페이지 기획안... ; ; ; 위에 써논거 들어갈 예정

      회원가입시 견종 입력받고 그걸 토대로 소중대를 나눠..? 아님 소중대 아예 없애?
      가입시 정보를 너무 많이 받으면 클라이언트들이 너무 귀찮아할 거 같음..  ===
      === 물어봤더니 견주입장에선 귀찮더라도 한번 쓰고 자세한 정보를 얻을 수 있으면 좋을 것 같다...

      게시글 작성시 로그인중인 유저의 강아지의 나이, 견종 태그 들어가기 위해서 작성시 같이 데이터 정보를 보낼 */}

    </PersonalDogWrapper>
  );
}

export default PersonalDog;