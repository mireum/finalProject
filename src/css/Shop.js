import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styled from 'styled-components';

export const ShopContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const StyledSlide = styled(Slider)`
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
    color: #000;
    -webkit-font-smoothing: antialiased;
  }  
`;