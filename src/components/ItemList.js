import React, { useState } from 'react';
import { ShopContainer } from '../css/Shop';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from "../image/img1.png";


function ItemList(props) {
  const array = [
    {
      brand: '프로도기',
      title: '퍼펙션 패드 소형 베이비파우더향 30매',
      price: 18000,
      imgurl: 'http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg'
    },
    {
      brand: '프로도기',
      title: '퍼펙션 패드 소형 베이비파우더향 30매',
      price: 18000,
      imgurl: 'http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg'
    },
    {
      brand: '프로도기',
      title: '퍼펙션 패드 소형 베이비파우더향 30매',
      price: 18000,
      imgurl: 'http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg'
    },
    {
      brand: '프로도기',
      title: '퍼펙션 패드 소형 베이비파우더향 30매',
      price: 18000,
      imgurl: 'http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg'
    },
    {
      brand: '프로도기',
      title: '퍼펙션 패드 소형 베이비파우더향 30매',
      price: 18000,
      imgurl: 'http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg'
    },
    {
      brand: '프로도기',
      title: '퍼펙션 패드 소형 베이비파우더향 30매',
      price: 18000,
      imgurl: 'http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg'
    }
  ];

  // const [ itemList, setItemList ] = useState([]);

  return (
    <ShopContainer>
      <Container>
        <Row id='itemlist' className='justify-content-md-center'>
        {/* <ul id='itemlist' > */}
        {array.map((item, index) => {
          return (
          // <li >
          //   <Link className='itemlink'>
          //     <img className='itemImage' />
          //     <p>{item.brand}</p>
          //     <span>{item.title}</span>
          //     <p className='price'>{item.price}</p>
          //   </Link>
          // </li>
          
            <Col xs={6} md={4} key={index} className='list'>
              <img src={item.imgurl} className='itemImage' />
              <p>{item.brand}</p>
              <span>{item.title}</span>
              <p className='price'>{item.price}</p>
            </Col>
          )
        })}
        {/* </ul> */}
        </Row>

        <button>더보기</button>
      </Container>
      {/* <ul id='itemlist'>
        <li>
          <Link className='itemlink'>
            <img className='itemImage' />
            <p>브랜드명</p>
            <span>상품명입니다아아</span>
            <p className='price'>17,000원</p>
          </Link>
        </li>
        <li>
      </ul> */}
    </ShopContainer>
  );
}

export default ItemList;