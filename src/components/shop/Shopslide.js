import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styled from 'styled-components';
import img1 from "../../image/1.png";

const StyledSlide = styled(Slider)`
  .slick-list {
    position: relative;
    width: 1200px;
    height: 400px;
    margin: 0 auto;
    background-color: #cccccc;
    /* overflow: hidden; */
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
    left: 470px;
  }
  .slick-next {
    right: 490px
  }
  /* .slick-prev:hover {
    opacity: 1;
  } */

  .slick-prev:before, .slick-next:before{ 
    font-family: 'slick';
    font-size: 40px;
    line-height: 1;
    opacity: .75;
    color: #c9bbbb;
    -webkit-font-smoothing: antialiased;
  }  
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
        
      </div>
      <div>
        
      </div>
      <div>
        
      </div>

    </StyledSlide>
  );
}

export default Shopslide;