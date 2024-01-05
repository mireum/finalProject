import React from 'react';
import { FaStar } from "react-icons/fa";

function StarReview({ star }) {
  const arr = [ ];

  for (let i=0; i<5; i++) {
    if (i < star) arr.push(1);
    else arr.push(0);
  }
  
  return (
    <>
      {arr.map((item, index) => {
        return (
          item === 1 ? <FaStar key={index}  style={{ color: '#B4BDFF' }}/>
          : <FaStar key={index}  style={{ color: '#fff' }}/> 
        )
      })}
    </>
  );
}

export default StarReview;