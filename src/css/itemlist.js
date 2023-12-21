import styled from "styled-components";
import img1 from '../image/img1.png';


export const ShopContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
    /* ItemList.js */
    h2 {
      font-size: 40px;
      font-weight: bold;
      margin: 10px 0 20px;
    }
    #itemlist {
      display: flex;
      justify-content: space-between;
      /* flex-wrap: wrap; */
    }
    #itemlist .list + .list {
      margin-left: 10px;
    }
    #itemlist .list .itemlink {
      text-decoration: none;
      color: #000;
    }
    #itemlist .list img.itemImage {
      background-image: url(${img1});
      width: 250px;
      height: 250px;
      background-repeat: no-repeat;
      background-size: 250px 250px;
      background-position: 50% 50%;
      border-radius: 10px;
    }

    #itemlist li p {
      color: #ababab;
      padding: 10px 0;
    }

    #itemlist li span {
      font-size: 18px;
      font-weight: bold;
    }

    #itemlist li p.price {
      font-size: 18px;
      font-weight: bold;
      color: #3d3d3d;
    }
`;

