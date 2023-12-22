import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styled from 'styled-components';

const CommunitySlideContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  .fx {
    display: flex;
  }
  .imgContainer {
    max-width: 390px;
    height: 400px;
    background: gray;
    margin-left: 10px;
    flex: 1;
  }
  .imgContent {
    background: orange;
    max-width: 190px;
    height: 190px;
    margin: 5px;
    flex: 1;
  }
`;

const StyledSlide = styled(Slider)`
  .slick-list {
    position: relative;
    max-width: 700px;
    height: 400px;
    margin: 0 auto;
    background-color: gray;
  }
  .slick-list:hover {
    .slick-prev {
      opacity: 1;
    }
  }
  
  .slick-prev, .slick-next {
    position: absolute;
    z-index: 1;
  }
  .slick-prev {
    left: 360px;
  }
  .slick-next {
    right: 490px
  }
  .slick-prev:before, .slick-next:before{ 
    font-family: 'slick';
    font-size: 40px;
    line-height: 1;
    opacity: .75;
    color: #c9bbbb;
    -webkit-font-smoothing: antialiased;
  }  
`;

function CommunitySlide(props) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
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
    <>
      <CommunitySlideContainer>
        <StyledSlide {...settings}>
          <div>
          </div>
          <div>
          </div>
        </StyledSlide>
        {/* <div className='imgContainer'>
          <div className='fx'>
            <div className='imgContent'>

            </div>
            <div className='imgContent'>

            </div>
          </div>
          <div className='fx'>
            <div className='imgContent'>

            </div>
            <div className='imgContent'>
              
            </div>
          </div>
        </div> */}
      </CommunitySlideContainer>

    </>
  );
}

export default CommunitySlide;