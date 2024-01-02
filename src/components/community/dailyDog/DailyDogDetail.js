import React from 'react';
import { useSelector } from 'react-redux';
import { selectDailyDogList } from '../../../features/dailyDogSlice';
import { useParams } from 'react-router-dom';
import Parser from 'html-react-parser'
import styled from 'styled-components';

const DailyDogDetailContainer = styled.div`
  max-width: 1200px;
  min-height: 800px;
  margin: 70px auto;
  text-align: center;
  

  h1 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  img {
    width: 460px;
    height: 360px;
    margin: 16px 0;
  }
`;

function DailyDogDetail(props) {
  const { id } = useParams();
  const testList = useSelector(selectDailyDogList);
  const filterList = testList.filter(item => item.id == id)

  return (
    <DailyDogDetailContainer>
      <h1>{filterList[0].title}</h1>
      {Parser(filterList[0].content)}
    </DailyDogDetailContainer>
  );
}

export default DailyDogDetail;