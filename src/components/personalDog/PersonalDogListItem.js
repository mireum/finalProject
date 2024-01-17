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
  const { postItems } = props;

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
          {/* <div>{postItems.map((a) => { return (<div>{a?.toktokPostFilter?.title}</div>) })}</div> */}
        </Slider>
      </ToktokWrapper>
    </>
  );
}

export default PersonalDogListItem;