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
    color: red;
  }
  & svg:hover ~ svg {
    color: #C4C4C4;
  }
  .red {
    color: red;
  }
`;



const array = [ 0, 1, 2, 3, 4 ];


function Star({handleStar}) {
  const [ clicked, setClicked ] = useState([false, false, false, false, false]);

  // useEffect(() => {
  //   sendReview();
  // }, [clicked]);

  // const sendReview = () => {
  //   let score = clicked.filter(Boolean).length;
  // };

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
    handleStar(clickStates);
  };


  return (
    <RatingBox>
      {array.map((item, index) => {
        return (
          <FaStar 
            key={index}
            onClick={() => {handleStarClick(item)}}
            className={clicked[item] && 'red'}
            size="35"
          />
        )
      })}
    </RatingBox>
  );
}

export default Star;