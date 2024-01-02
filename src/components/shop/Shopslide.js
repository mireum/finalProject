import React from 'react';
import img1 from "../../image/slide1.png";
import img2 from "../../image/slide2.png";
import img3 from "../../image/slide3.png";
import img4 from "../../image/slide4.png";
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const StyledSlide = styled(Slider)`
  /* position: relative; */
  & div {
    position: relative;
  }
    
  .slick-list {
    width: 1200px;
    height: 400px;
    margin: 0 auto;
    background-color: #cccccc;
    /* overflow: hidden; */
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

function Shopslide(props) {

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
      <StyledSlide {...settings}>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} /> 
        </div>

      </StyledSlide>
  );
}

export default Shopslide;