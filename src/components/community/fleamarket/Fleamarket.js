import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FleamarketItem from './FleamarketItem';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GrRefresh } from "react-icons/gr";

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
  const [ select, setSelect ] = useState({
    category: '',
    area: '',
    price: '',
    view: ''
  });

  const { category, area, price, view } = select;

  // canva
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

  const onSelectChange = (e) => {
    const { name, value } = e.target;

    setSelect(prev => ({
      ...prev,
      [name]: value
    }))
  }

  console.log(category, area, price, view);

  return (
    <FleamarketContainer>
      <h1>중고거래</h1>
      <div className='info'>
        <p>반려견의 물품을 거래해요!</p>
        <button onClick={() => navigate('/community/fleamarket/write')}>판매하기</button>
      </div>
      <div className='category-box'>
        <select value={category} name='category' onChange={onSelectChange}>
          <option value=''>카테고리</option>
          <option value='feed'>사료</option>
          <option value='snack/nutritional'>간식/영양제</option>
          <option value='bowel/hygiene'>배변/위생</option>
          <option value='walk/play'>산책/놀이</option>
        </select>
        <select value={area} name='area' onChange={onSelectChange}>
          <option value=''>지역</option>
          <option value='seoul'>서울</option>
          <option value='gyeonggi'>경기</option>
          <option value='incheon'>인천</option>
          <option value='daejeon'>대전</option>
          <option value='daegu'>대구</option>
          <option value='gwangju'>광주</option>
          <option value='busan'>부산</option>
          <option value='gangwon'>강원</option>
          <option value='ulsan'>울산</option>
          <option value='jeju'>제주</option>
        </select>
        <select value={price} name='price' onChange={onSelectChange}>
          <option value=''>가격</option>
          <option value='row'>낮은순</option>
          <option value='high'>높은순</option>
        </select>
        <select value={view} name='view' onChange={onSelectChange}>
          <option value=''>조회</option>
          <option value='row'>낮은순</option>
          <option value='high'>높은순</option>
        </select>
        <button><GrRefresh /></button>
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