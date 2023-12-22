import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styled from 'styled-components';

export const CommunitySlideContainer = styled.div`
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

export const StyledSlide = styled(Slider)`
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

export const CommunityHomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  .communityHomeContent {
    margin-top: 60px;

    h2 {
      font-size: 20px;
      font-weight: bold;

      button {
        cursor: pointer;
        border: none;
        background: none;
        font-size: 16px;
      }
    }


  }
`;