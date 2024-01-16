import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ChattingInnerBox = styled.div`
  display: flex;
  padding: 6px 10px;
  overflow: auto;
  max-width: 1200px;
  border: 1px solid #ccc;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  span {
    font-weight: bold;
  }

  .chattinglist-inner-box + .chattinglist-inner-box {
    border-top: 1px solid #ccc;
  }

  .chattinglist-userinfo-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 6px;

    .sort {
      display: flex;
      justify-content: space-between;
    }
  }
`;

function ChatList({ audience, msg, lastChatUser, chatTime, isLogin, handleToChatroom }) {
  const [alarm, setAlarm] = useState(false);
  console.log(audience);
  console.log(isLogin);

  useEffect(() => {
    if (lastChatUser === isLogin) {
      setAlarm(false);
    } else {
      setAlarm(true);
    }
  }, [msg]);

  const handleAlarm = () => {
    setAlarm(false);
  };

  const detailDate = (a) => {
		const milliSeconds = new Date() - a;
		const seconds = milliSeconds / 1000;
		if (seconds < 60) return `방금 전`;
		const minutes = seconds / 60;
		if (minutes < 60) return `${Math.floor(minutes)}분 전`;
		const hours = minutes / 60;
		if (hours < 24) return `${Math.floor(hours)}시간 전`;
		const days = hours / 24;
		if (days < 7) return `${Math.floor(days)}일 전`;
		const weeks = days / 7;
		if (weeks < 5) return `${Math.floor(weeks)}주 전`;
		const months = days / 30;
		if (months < 12) return `${Math.floor(months)}개월 전`;
		const years = days / 365;
		return `${Math.floor(years)}년 전`;
	};
	
	const nowDate = detailDate(new Date(chatTime));


  return (
    <ChattingInnerBox onClick={() => {handleAlarm(); handleToChatroom(audience);}}>
      <div className='chattinglist-inner-box'>
        <img src='https://i.namu.wiki/i/Bge3xnYd4kRe_IKbm2uqxlhQJij2SngwNssjpjaOyOqoRhQlNwLrR2ZiK-JWJ2b99RGcSxDaZ2UCI7fiv4IDDQ.webp' alt='게스트 이미지'/>
        <div className='chattinglist-userinfo-box'>
          <div className='sort'>
            <p><span>{audience}</span></p>
            <p>
              {nowDate}
              { alarm 
                ?
                  <span>🎈</span>  
                : 
                  ''
              }
            </p>   
          </div>
          <p>{msg}</p>
        </div>
      </div>
    </ChattingInnerBox>
  );
}

export default ChatList;