import React from 'react';
import { FaStar } from "react-icons/fa";

function StarReview({ star }) {

  return (
    <>
      {star.map((item, i) => item ? <FaStar key={i} style={{ color: 'red'}}/> : <FaStar key={i} style={{ color: 'gray' }} /> )}
    </>
  );
}

export default StarReview;