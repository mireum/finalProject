import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import DailyDogItem from './DailyDogItem';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DailyDogContainer = styled.div`
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

const DailyDogItemContainer = styled(Container)`
  margin-top: 20px;
`;

function DailyDog(props) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const dailyDogData = async () => {
      try {
        const response = await axios.get('http://localhost:8888/community/daily');
        setData(response.data.data);
      } catch (err) {
        console.error(err);
      }
    }
    dailyDogData();
  }, [])

  return (
    <DailyDogContainer>
      <h1>데일리독</h1>
      <div className='info'>
        <p>사랑스러운 내 반려견의 일상을 공유해요!</p>
        <button onClick={() => navigate('/community/dailyDog/write')}>공유하기</button>
      </div>
      <DailyDogItemContainer>
        <Row>
          {data.map((item, index) => <DailyDogItem key={index} item={item} />).reverse()}
        </Row>
      </DailyDogItemContainer>
    </DailyDogContainer>
  );
}

export default DailyDog;