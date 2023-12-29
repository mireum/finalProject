import React from 'react';
import { FaStar } from "react-icons/fa";

function StarStar({ star }) {

  return (
    <div>
      {star.map((item, i) => item ? <FaStar key={i} style={{ color: 'red'}}/> : <FaStar key={i} style={{ color: 'gray' }} /> )}
    </div>
  );
}

export default StarStar;