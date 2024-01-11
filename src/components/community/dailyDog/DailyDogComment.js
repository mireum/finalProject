import React, { useState } from 'react';
import { dateFormat } from '../../../util';

function DailyDogComment(props) {
  const { comment: { comment, date, author } } = props;
  
  const [ isExpanded, setIsExpanded ] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='comment-one-box'>
      <img src='https://i.namu.wiki/i/Bge3xnYd4kRe_IKbm2uqxlhQJij2SngwNssjpjaOyOqoRhQlNwLrR2ZiK-JWJ2b99RGcSxDaZ2UCI7fiv4IDDQ.webp'/>
      <div className='comment-user-box'>
        <p><span>{author}</span>{dateFormat(date)}</p>
        {comment.length > 120
          ? <div className='comment-expanded'> 
              <p>{comment.slice(0, 120)}{isExpanded ? '' : '...'}{isExpanded && comment.slice(100, comment.length)}
                <button onClick={toggleExpansion}>{isExpanded ? '접기' : '더보기'}</button>
              </p>
            </div>
          : <p>{comment}</p>
        }
      </div>
    </div>
  );
}

export default DailyDogComment;