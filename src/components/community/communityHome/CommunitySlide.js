import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styled from 'styled-components';
import main1 from '../../../image/main1.jpg'
import main2 from '../../../image/main2.jpg'
import main3 from '../../../image/main3.jpg'
import main4 from '../../../image/main4.jpg'

const CommunitySlideContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  border-radius: 10px;
  overflow: hidden;

  img {
    cursor: pointer;

    &:hover {
      transform: scale(1.01);
    }
  }

  .img-box1 {
    max-width: 400px;
    height: 200px;
    overflow: hidden;

    img {
      width: 50%;
      height: 100%;
      padding-left: 10px;
      padding-bottom: 5px;
    }
  }

  .img-box2 {
    max-width: 400px;
    height: 200px;
    overflow: hidden;

    img {
      width: 50%;
      height: 100%;
      padding-left: 10px;
      padding-top: 5px;
    }
  }
`;

const StyledSlide = styled(Slider)`
  max-height: 400px;

  /* position: relative; */
  & div {
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
  }
    
  .slick-list {
    max-width: 800px;
    margin: 0 auto;
    background-color: #cccccc;
  }
  
  .slick-prev, .slick-next {
    position: absolute;
    z-index: 1;
  }

  .slick-prev {
    left: 30px;
  }

  .slick-next {
    right: 48px;
  }

  .slick-dots {
    position: relative;
    top: -30px;
  }

  .slick-dots li button:before {
    font-size: 10px;
  }

  .slick-prev:before, .slick-next:before{
    /* position: relative; */
    font-family: 'slick';
    font-size: 40px;
    line-height: 1;
    opacity: .75;
    /* color: #c9bbbb; */
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }  
  /* .slick-prev:before:hover, .slick-next:before:hover {
    color: #333;
  } */
`;

function CommunitySlide(props) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover : true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [ // 반응형 웹 구현 옵션
		{  
			breakpoint: 960, //화면 사이즈 960px일 때
			settings: {
			} 
		},
		{ 
			breakpoint: 768, //화면 사이즈 768px일 때
			settings: {	
			} 
		}
	]
  };

  return (
    <CommunitySlideContainer>
      <div>
        <StyledSlide {...settings}>
          <div>
            <img src='https://post-phinf.pstatic.net/MjAyMjAyMTdfMiAg/MDAxNjQ1MDg1MDIwMDIw.QvAeSvFkAWlGvGsL41R4EEtlENm5tvF3Xs4GRc26Orsg.KW-Q0fDbT3mMS0yF5agjz6KI9M-uNOXujrbNxHtV1OAg.PNG/Thum_40%EC%A3%BC.png?type=w1200' />
          </div>
          <div>
            <img src='https://cdn.woodkorea.co.kr/news/photo/201911/38944_46314_202.jpg' />
          </div>
          <div>
            <img src='https://image.msbg.io/?p=mocoblob.blob.core.windows.net%2Fassets%2Fmagazine%2Fimg%2F14_1705286223524_0.png' />
          </div>
        </StyledSlide>
      </div>
      <div>
        <div className='img-box1'>
          <img src={main2} />
          <img src={main1} />
        </div>
        <div className='img-box2'>
          <img src={main4} />
          <img src={main3} />
        </div>
      </div>
    </CommunitySlideContainer>
  );
}

export default CommunitySlide;