import React from 'react';
import { StyledSlide } from "../../css/Shop";
import img1 from "../../image/1.png";



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