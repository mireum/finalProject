import React from 'react';
import styled from 'styled-components';

const ToktokWrapper = styled.div`
  background-color: red;
  width: 250px;
  
`
const DailyDogWrapper = styled.div`
  background-color: beige;
  width: 250px;

`
const ShopWrapper = styled.div`
  background-color: green;
  width: 250px;

`

function PersonalDogListItem(props) {
  return (
    <>
      <ToktokWrapper>{props.tokTitle}</ToktokWrapper>
      <DailyDogWrapper>{props.dailyTitle}</DailyDogWrapper>
      <ShopWrapper>{props.shopTitle}</ShopWrapper>
    </>
  );
}

export default PersonalDogListItem;