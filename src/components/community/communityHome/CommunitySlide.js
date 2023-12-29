import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styled from 'styled-components';
import testImage from '../../../images/app.jpg'

const CommunitySlideContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;

  .img-box1 {
    width: 400px;
    height: 200px;

    img {
      width: 200px;
      height: 200px;
      padding-left: 10px;
      padding-bottom: 5px;
    }
  }

  .img-box2 {
    width: 400px;
    height: 200px;

    img {
      width: 200px;
      height: 200px;
      padding-left: 10px;
      padding-top: 5px;
    }
  }
`;

const StyledSlide = styled(Slider)`
  /* position: relative; */
  & div {
    position: relative;
  }

  img {
    width: 100%;
  }
    
  .slick-list {
    width: 800px;
    height: 400px;
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
  //   responsive: [ // 반응형 웹 구현 옵션
	// 	{  
	// 		breakpoint: 960, //화면 사이즈 960px일 때
	// 		settings: {
	// 			//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
	// 			slidesToShow:3 
	// 		} 
	// 	},
	// 	{ 
	// 		breakpoint: 768, //화면 사이즈 768px일 때
	// 		settings: {	
	// 			//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
	// 			slidesToShow:2 
	// 		} 
	// 	}
	// ]
  };

  return (
    <CommunitySlideContainer>
      <div>
        <StyledSlide {...settings}>
          <div>
            <img src='https://post-phinf.pstatic.net/MjAyMjAyMjhfMjA2/MDAxNjQ2MDMyNDk5MTEy.oTShLtN2pPZJPI77l1KK5Z-e8DqomTXhEQ4Brto3apQg.xWNUJTmt0bVeGWPLLt4xOkHyUet9QKhyKFT_E47dMiAg.PNG/Thum_51%EC%A3%BC.png?type=w1200' />
          </div>
          {/* <div>
            
          </div>
          <div>
            
          </div>
          <div>
            
          </div> */}

        </StyledSlide>
      </div>
      <div>
        <div className='img-box1'>
          <img src='https://image.msbg.io/?p=mocoblob.blob.core.windows.net%2Fassets%2Fmagazine%2Fimg%2F14_1645429454445_0.png&w=285&h=285' />
          <img src='https://image.msbg.io/?p=mocoblob.blob.core.windows.net%2Fassets%2Fmagazine%2Fimg%2F14_1645429454445_0.png&w=285&h=285' />
        </div>
        <div className='img-box2'>
          <img src='https://image.msbg.io/?p=mocoblob.blob.core.windows.net%2Fassets%2Fmagazine%2Fimg%2F14_1645429454445_0.png&w=285&h=285' />
          <img src='https://image.msbg.io/?p=mocoblob.blob.core.windows.net%2Fassets%2Fmagazine%2Fimg%2F14_1645429454445_0.png&w=285&h=285' />
        </div>
      </div>
    </CommunitySlideContainer>
  );
}

export default CommunitySlide;