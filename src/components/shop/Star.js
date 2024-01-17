import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import styled from 'styled-components';

const RatingBox = styled.div`
  margin: 0 auto;

  & svg {
    color: #C4C4C4;
    cursor: pointer;
  }
  :hover svg {
    color: #B4BDFF;
  }
  & svg:hover ~ svg {
    color: #C4C4C4;
  }
  .true {
    color: #B4BDFF;
  }
`;

const array = [ 0, 1, 2, 3, 4 ];

function Star({handleStar}) {
  const [ clicked, setClicked ] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);

    const sum = clickStates.reduce(function (a, b) {
      return a + b;
    })
    handleStar(sum);
  };


  return (
    <RatingBox>
      {array.map((item, index) => {
        return (
          <FaStar 
            key={index}
            onClick={() => {handleStarClick(item)}}
            className={clicked[item] && 'true'}
            size="35"
          />
        )
      })}
    </RatingBox>
  );
} 

export default Star;