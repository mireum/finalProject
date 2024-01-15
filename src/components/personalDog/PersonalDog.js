import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getLoginUser } from '../../features/userInfoSlice';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import PersonalDogListItem from './PersonalDogListItem';

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
  .ListBox {
    display: flex;
    justify-content: center;
    text-align: center;
    h4{
      font-size: 24px;
      margin-bottom: 20px;
    }
    .daily {
      margin: 0 70px;
    }
  }
`;

function PersonalDog(props) {
  const 로그인중 = useSelector(getLoginUser); // 현재 로그인중 유저 정보

  const [getPersonalDog, setGetPersonalDog] = useState();
  const [allPost, setAllPost] = useState();

  useEffect(() => {
    const commentListGet = async () => {
      const response = await axios.get('/community/toktok/PersonalDog');
      setGetPersonalDog(response.data);
    };
    commentListGet();
  }, []);
  console.log(getPersonalDog);

  const toktokFilter = getPersonalDog?.toktokPost.filter((toktokFilter) => { // 육아톡톡 로그인정보로 필터링
    return (toktokFilter?.user.signDogType === 로그인중?.signDogType);
  });
  // const dailyFilter = getPersonalDog?.dailyPost.filter((dailyFilter) => { // 데일리독 로그인정보로 필터링
  //   return (dailyFilter.user.signDogType === 로그인중.signDogType);
  // })
  // const shopFilter = getPersonalDog?.shopPost.filter((shopFilter) => { // 샵 로그인정보로 필터링
  //   return (shopFilter.user.signDogType === 로그인중.signDogType);
  // })

  // setAllPost(toktokFilter, 데일리배열, 샵배열)

  return (
    <PersonalDogWrapper>
      <h1>{로그인중?.signDogName}</h1>                       {/* 슬라이드 라이브러리 사용해서 게시글 박스 마다마다 적용 */}
      <br /><br />
      <h2>{로그인중?.signDogName}과의 생활 중 고민거리, 궁금증이 있으신가요? 저희가 알려드릴게요!</h2>
      <br /><hr />
      <div className='ListBox'>

        <h4>육아톡톡</h4>
        {/* <Slider {...settings}> */}
        <div className='toktok'>
          {toktokFilter?.map((testMap) => {
            return <PersonalDogListItem
              tokTitle={testMap.title}
            />
          })}
        </div>

        {/* </Slider> */}
        <div className='daily'>
          <h4>데일리독</h4>
          {getPersonalDog?.dailyPost.map((tt) => { // 게시글 쓸때 유저정보 혹은 유저의 강아지 나이 종 무게 담겨야함 민수한테 얘기 ㄱ
            return <PersonalDogListItem
              dailyTitle={tt.title}
            />
          })}
        </div>
        <div className='shop'>
          <h4>샵</h4>
          {getPersonalDog?.dailyPost.map((tt) => { // 샵은 무게, 나이 정도 필요할듯 지우하은 얘기 ㄱ
            return <PersonalDogListItem
              shopTitle={tt.title}
            />
          })}
        </div>

      </div>

      <hr />
      <hr />
      <div className='typeAgeInfo'>
        강아지 나이별 종별 정보
      </div>




      <hr /><hr />
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