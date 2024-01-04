import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getLoginUser } from '../../features/userInfoSlice';

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
`;

function PersonalDog(props) {
  const 로그인중 = useSelector(getLoginUser); // 현재 로그인중 유저 정보


  const testTokTok = [
    {
      _id: '004',
      title: '5555',
      content: '6666',
      author: '하은강아지',
      img: 'https://picsum.photos/100/100',
      like: 0,
      view: 0,
      comment: 0,
      signDogName: '깜돌이',
      signDogType: '견종푸들'
    }, {
      _id: '005',
      title: '5555',
      content: '6666',
      author: '민수강아지',
      img: 'https://picsum.photos/100/100',
      like: 0,
      view: 0,
      comment: 0,
      signDogName: '금쪽이',
      signDogType: '견종리트리버'
    },
  ];
  const testShopProduct = [
    {
      brand: '프로도기',
      title: '퍼펙션 패드 소형 베이비파우더향 30매',
      price: 18000,
      DogSize: 'small',
    },
    {
      brand: '프로도기',
      title: '퍼펙션 패드 소형 베이비파우더향 30매',
      price: 18000,
      DogSize: 'middle',
    },
    {
      brand: '프로도기',
      title: '퍼펙션 패드 소형 베이비파우더향 30매',
      price: 18000,
      DogSize: 'big',
    }
  ];

  const filterTokTokType = testTokTok.filter((filterTestList) => { // 로그인값, db 필터
    return (filterTestList.signDogType == 로그인중.signDogType);
  });
  const filterShopProductFilter = testShopProduct.filter((filterTestList) => {
    return (filterTestList.DogSize == 로그인중.DogSize);
  });

  return (
    <PersonalDogWrapper>
      <h1>{로그인중.signDogName}</h1>
      <br /><br />
      <h2>{로그인중.signDogName}과의 생활 중 고민거리, 궁금증이 있으신가요? 저희가 알려드릴게요!</h2>
      <br /><hr />
      <div>
        <div>육아톡톡 필터////// {/* 네비게이트에 게시글 아이디 주소뒤에 써서 클릭시 바로 디테일페이지 가게 */}
          {filterTokTokType.map((testMap) => {
            return (testMap.author)
          })}
        </div>
        <hr /><hr />
        견종, 나이별 맞춤제품/
        각종 게시글 취합..?/
        산책로 추천/
        꺼무위키 정보..?/
        블로그 추천..?/
        등등...뭐가 있지/
        ????????????????
      </div>
      제품, 게시글 취합은 db 정보 받아와서 유저정보 필터로 걸러서 하면 될듯??



      필요한거:
      쇼핑몰 맞춤 제품 구분할때 들어가는 데이터 소중대에서 나이,자견,성견,노견으로 바꿔야 할듯
      {/* 회원가입할때 개정보 나이를 입력받고? 그걸 비교해서 자 성 노 */}
      맞춤페이지 기획안... ; ; ; 위에 써논거 들어갈 예정 컨펌 받으싈?

      회원가입시 견종 입력받고 그걸 토대로 소중대를 나눠..? 아님 소중대 아예 없애?
      가입시 정보를 너무 많이 받으면 클라이언트들이 너무 귀찮아할 거 같음..  ===
      === 물어봤더니 견주입장에선 귀찮더라도 한번 쓰고 자세한 정보를 얻을 수 있으면 좋을 것 같다...

      게시글 작성시 로그인중인 유저의 강아지의 나이, 견종 태그 들어가기 위해서 작성시 같이 데이터 정보를 보낼
    </PersonalDogWrapper>
  );
}

export default PersonalDog;