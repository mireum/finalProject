import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import FleamarketItem from './FleamarketItem';
import testImage from '../../../images/app.jpg'
import { useNavigate } from 'react-router-dom';


const FleamarketContainer = styled.div`
  max-width: 1200px;
  min-height: 800px;
  margin: 70px auto;

  h1 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .info {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
  }
`;

const FleamarketItemContainer = styled(Container)`
  margin-top: 20px;
`;

const StyledRow = styled(Row)`
  display: flex;
  justify-content: space-between;
`;

function Fleamarket(props) {
  const navigate = useNavigate();

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
      <div className='info'>
        <p>반려견의 물품을 거래해요!</p>
        <button onClick={() => navigate('/community/fleamarket/write')}>판매하기</button>
      </div>
      <FleamarketItemContainer>
        <StyledRow>
          {test.map((item, index) => <FleamarketItem key={index} item={item}/>)}
        </StyledRow>
      </FleamarketItemContainer>
    </FleamarketContainer>

  );
}

export default Fleamarket;