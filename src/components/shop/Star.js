import React, { useState } from 'react';
import { ImStarFull } from "react-icons/im";

const array = [ 0, 1, 2, 3, 4 ];

function Star(props) {
  const [ clicked, setClicked ] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  return (
    <div>
      {array.map((item) => {
        return (
          <ImStarFull 
            key={item}
            onClick={() => {handleStarClick(item)}}
            className={clicked[item] && 'yellow'}
            size="35"
          />
        )
      })}
    </div>
  );
}

export default Star;