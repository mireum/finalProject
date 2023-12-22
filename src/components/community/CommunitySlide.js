import React from 'react';
import { CommunitySlideContainer, StyledSlide } from '../../css/community';

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