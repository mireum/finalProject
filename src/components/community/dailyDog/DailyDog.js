import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import DailyDogItem from './DailyDogItem';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectDailyDogList } from '../../../features/dailyDogSlice';

const DailyDogContainer = styled.div`
  max-width: 1200px;
  min-height: 1400px;
  margin: 0 auto;
  margin-top: 70px;

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

const DailyDogItemContainer = styled(Container)`
  margin-top: 20px;
`;

function DailyDog(props) {

  const navigate = useNavigate();

  const test = [
    {
      id: 1,
      title: '첫번째 사진',
    },
    {
      id: 2,
      title: '두번째 사진',
    },
    {
      id: 3,
      title: '세번째 사진',
    },
    {
      id: 4,
      title: '네번째 사진',
    }
  ]

  const abc = useSelector(selectDailyDogList);
  test.push(...abc);
  console.log(test);

  return (
    <DailyDogContainer>
      <h1>데일리독</h1>
      <div className='info'>
        <p>사랑스러운 내 반려견의 일상을 소개해요!</p>
        <button onClick={() => navigate('/community/dailyDog/write')}>소개하기</button>
      </div>
      <DailyDogItemContainer>
        <Row>
          {test.map((item, index) => <DailyDogItem key={index} item={item}/>)}
        </Row>
      </DailyDogItemContainer>
    </DailyDogContainer>
  );
}

export default DailyDog;