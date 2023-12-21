import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styled from 'styled-components';

export const StyledSlide = styled(Slider)`
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

  .slick-prev:before, .slick-next:before{ 
    font-family: 'slick';
    font-size: 40px;
    line-height: 1;
    opacity: .75;
    color: #c9bbbb;
    -webkit-font-smoothing: antialiased;
  }  
`;