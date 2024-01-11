import React from 'react';
import { FaStar } from "react-icons/fa";

function StarReview({ star }) {
  const arr = [ ];

  const num = Math.round(star);
  for (let i=0; i<5; i++) {
    if (i < num) arr.push(1);
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