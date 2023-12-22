import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import styled from 'styled-components';

export const CommunityInsertWrapper = styled.div`  // 커뮤니티 인서트 창
  background-color: #ccc;
  .a {
    background-color: #f0f0f0;
    height: 30px;
  }
  .b {
    display: flex;
    flex-flow: column;
    input, textarea {
      padding: 10px 0 ;
      margin: 10px 0;
      background-color: aliceblue;
    }
  }
  `;

// toktok 페이지
export const ToktokWrapper = styled.div`
  width: 1208px;
  height: 1000px;
  background-color: #ccc;
  h1 {
    font-size: 44px;
    font-weight: bold;
    color: #000;
    padding: 10px 20px;
  }
  .between {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
  .test {
    font-size: 33px;
    color: red;
    background-color: beige;
  }
`;
export const ToktokItemWrapper = styled.div`
  .abc {
    padding: 0 10px;
  }
`;
export const ToktokDetailWrapper = styled.div`
  background-color: #ccc;
  .a {
    background-color: #505050;
    height: 200px;
  }
`;
export const ToktokDetailCommentItemWrapper = styled.div`
  background-color: #ccc;
  .a {
    background-color: #f0f0f0;
    height: 30px;
  }
`;

// 메인페이지
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