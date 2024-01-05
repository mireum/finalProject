import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FleamarketItem from './FleamarketItem';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FleamarketContainer = styled.div`
  max-width: 1200px;
  min-height: 800px;
  margin: 70px auto;

  h1 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  button {
    padding: 6px 8px;
    border: none;
    background: #68a6fe;
    color: #fff;
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

function Fleamarket(props) {
  const navigate = useNavigate();
  const [ data, setData ] = useState([]);

  useEffect(() => {
    const fleamarketData = async () => {
      try {
        const response = await axios.get('http://localhost:8888/vintage');
        setData(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    fleamarketData();
  }, [])

  return (
    <FleamarketContainer>
      <h1>중고거래</h1>
      <div className='info'>
        <p>반려견의 물품을 거래해요!</p>
        <button onClick={() => navigate('/community/fleamarket/write')}>판매하기</button>
      </div>
      <FleamarketItemContainer>
        <Row>
          {data && data.map((item, index) => <FleamarketItem key={index} item={item} id={index} />).reverse()}
        </Row>
      </FleamarketItemContainer>
    </FleamarketContainer>

  );
}

export default Fleamarket;