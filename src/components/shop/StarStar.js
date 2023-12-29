import React from 'react';
import { FaStar } from "react-icons/fa";

function StarStar({ star }) {

  return (
    <div>
      {star.map(item => item ? <FaStar style={{ color: 'red'}}/> : <FaStar style={{ color: 'gray' }} /> )}
    </div>
  );
}

export default StarStar;