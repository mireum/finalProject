import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import FleamarketItem from './FleamarketItem';
import testImage from '../../../images/app.jpg'


const FleamarketContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 60px;
`;

const FleamarketItemContainer = styled(Container)`
  max-width: 1200px;
`;

function Fleamarket(props) {

  const test = [
    {
      id: 1,
      title: '첫번째 물품',
      price: 10000,
      place: '경기도 화성시'
    },
    {
      id: 2,
      title: '두번째 물품',
      price: 20000,
      place: '경기도 평택시'
    },
    {
      id: 3,
      title: '세번째 물품',
      price: 15000,
      place: '서울시 구로구'
    },
    {
      id: 4,
      title: '네번째 물품',
      price: 8000,
      place: '인천시 계양구'
    }
  ]


  return (
    <FleamarketContainer>
      <h1>중고거래</h1>
      <FleamarketItemContainer>
        <Row>
          {test.map((item, index) => <FleamarketItem key={index} item={item}/>)}
        </Row>
      </FleamarketItemContainer>
    </FleamarketContainer>

  );
}

export default Fleamarket;