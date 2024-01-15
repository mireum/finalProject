import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

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
  const { tokTitle, dailyTitle } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <>
      <ToktokWrapper>
        <Slider {...settings}>
          <div>{tokTitle}</div>
        </Slider>
      </ToktokWrapper>
      <DailyDogWrapper>
        {props.dailyTitle}
      </DailyDogWrapper>
      <ShopWrapper>
        {props.shopTitle}
      </ShopWrapper>
    </>
  );
}

export default PersonalDogListItem;