import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styled from 'styled-components';

import myPet from "../image/mypet.png";
import all from "../image/all.png";
import feed from "../image/feed.png";
import accessory from "../image/accessory.png";
import snack from "../image/snack.png";
import beauty from "../image/beauty.png";

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
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }  
  /* .slick-prev:before:hover, .slick-next:before:hover {
    color: #333;
  } */
`;

export const StyledCategory = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 100px 0;
  margin: 0 60px ;
  li + li {
    margin-left: 10px;
  };
  li img.cate-st {
    background-color: #f7f7f7;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70px 70px;
    width: 100px;
    height: 100px;
    /* display: inline-block;
    content: ""; */
    /* border-radius: 30px; */
  }

  li img.cate-1  {
    background-image: url(${myPet});
  }
  li img.cate-2 {
    background-image: url(${all});
  }
  li img.cate-3 {
    background-image: url(${feed});
  }
  li img.cate-4 {
    background-image: url(${snack});
  }
  li img.cate-5 {
    background-image: url(${accessory});
  }
  li img.cate-6 {
    background-image: url(${beauty});
  }
  li p {
    text-align: center;
    padding: 5px 0;
    font-weight: bold;
    color: #555;
  }
  
  
`;