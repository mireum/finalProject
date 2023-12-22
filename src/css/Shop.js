import styled from "styled-components";
import img1 from '../image/img1.png';


export const ShopContainer = styled.section`
  max-width: 1200px;  // 병합하고 지워볼 것
  margin: 0 auto;
  h2 {
    font-size: 40px;
    font-weight: bold;
    margin: 10px 0 20px;
  }
  #itemlist {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    /* align-items: center; */
  }
  #itemlist > div {
    width: 250px;
    height: 320px;
    margin: 0 25px;
  }
  #itemlist > div .list .itemImage {
    width: 225px;
    height: 225px;
    border-radius: 10px;
    overflow: hidden;
  }
  #itemlist > div p {
    color: #ababab;
    padding: 3px 0;
  }
  #itemlist > div span {
    font-size: 18px;
  }
  #itemlist > div p.price {
    font-size: 18px;
    font-weight: bold;
    color: #3d3d3d;
    padding-top: 8px;
  } 
  button {
    display: block;
    width: 4.5rem;
    height: 2rem;
    background-color: #68a6fe;
    border: none;
    border-radius: 0.5rem;
    font-weight: bold;
  }

`;
