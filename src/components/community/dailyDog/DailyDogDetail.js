import React from 'react';
import { useSelector } from 'react-redux';
import { selectDailyDogList } from '../../../features/dailyDogSlice';
import { useParams } from 'react-router-dom';
import Parser from 'html-react-parser'
import styled from 'styled-components';

const DailyDogDetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 60px;
  height: 1200px;
  text-align: center;
  

  h1 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  img {
    max-width: 460px;
    max-height: 300px;
    margin: 16px 0;
  }
`;

function DailyDogDetail(props) {
  const { id } = useParams();
  const abc = useSelector(selectDailyDogList);
  const cbb = abc.filter(item => item.id == id)

  return (
    <DailyDogDetailContainer>
      <h1>{cbb[0].title}</h1>
      {Parser(cbb[0].content)}
    </DailyDogDetailContainer>
  );
}

export default DailyDogDetail;