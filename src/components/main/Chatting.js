import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import io from "socket.io-client";
import { useSelector } from 'react-redux';
import { getLoginUser } from '../../features/userInfoSlice';
import axios from 'axios';
import { useParams } from 'react-router';


const ChattingContainer = styled.div`
  max-width: 1200px;
  height: 800px;
  margin: 70px auto;
  border: 1px solid #ccc;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .inner {
    display: flex;
    height: 800px;

    .userinfo-box {
      flex-basis: 150px;
      border-right: 1px solid #ccc;
      overflow: auto;

      div {
        padding: 10px 0;
        display: flex;
        justify-content: center;
      }

      span {
        margin-left: 6px;
        font-weight: bold;
      };
    }

    .chattinglist-box {
      padding: 10px 0;
      flex-basis: 350px;
      border-right: 1px solid #ccc;
      overflow: auto;

      span {
        font-weight: bold;
      }

      .chattinglist-inner-box {
        display: flex;
        padding: 6px 10px;
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
    }
    
    .chatting-box {
      flex-basis: 700px;
      display: flex;
      flex-direction: column;

      .sellerinfo-box {
        height: 100px;
        border-bottom: 1px solid #ccc;

        span {
          font-size: 18px;
          font-weight: bold;
        }
      }

      .chatting-detail-box {
        height: 560px;
        overflow: auto;
        padding: 0 10px;
        /* display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end; */

        &::-webkit-scrollbar {
          display: none;
        }

        .message-notme-box {
          max-width: 50%;
          margin-top: 10px;
          min-height: 36px;
          padding: 10px;
          background-color: #ccc;
          border-radius: 10px;
          clear: both;
          float: left;
        }

        .message-box {
          max-width: 50%;
          margin-top: 10px;
          min-height: 36px;
          padding: 10px;
          background-color: #68a6fe;
          border-radius: 10px;
          clear: both;
          float: right;
        }

        .day {
          text-align: center;
          padding-top: 20px
        }
      }

      .chatting-input-box {
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 10px;
        height: 140px;

        textarea {
          border: none;
          width: 100%;
          height: 90%;
          resize: none;

          &:focus {
            outline: none;
          }
        }
      }


    }
  }
`;

function Chatting(props) {
  const scrollRef = useRef();
  const { id } = useParams();
  const isLogin = useSelector(getLoginUser);

  const [ chats, setChats ] = useState([]);
  const [ chatDetail, setChatDetail ] = useState([]);
  const [ value, setValue ] = useState('');
  const [ room, setRoom ] = useState('');
  const [ userId, setUserId ] = useState(isLogin?.userId);
  
  const socket = io.connect("http://localhost:8888");

  const valueOnChange = (e) => {
    setValue(e.target.value);
  };
  
  const handleSubmitMessage = () => {
    // setChats(prevChat => [...prevChat, value]);
    const data = {
      msg: value,
      id: '천지민',
      // id: userId,
      room: '천지민',
    }
    socket.emit('userSend', data);
    setValue('');
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  // useEffect(() => {
  //   socket.on("sendMsg", data => {
  //     setChats([...chats, data.msg]);
  //   });
  // }, [chats]);
  useEffect(() => {
    const getChatListHandler = async () => {
      const getChatList = await axios.get('http://localhost:8888/getChatHeaderList', {withCredentials: true});
      setChats(getChatList.data.chatData);
    };
    // 임시
    const server = '천지민'
    socket.emit('login', server);
    getChatListHandler();
  }, []);


  const handleToChatroom = async (id) => {
    console.log(id);
    const chatting = await axios.post(`http://localhost:8888/getChatting`, { id }, {withCredentials: true});
    setChatDetail(chatting.data.resulte[0].chatList)
  };



  // io.on("connection", socket => {
  //   console.log(`User Connected: ${socket.id}`);
  //   socket.on("join_room", data => {
  //     socket.join(data);
  //   });
  //   socket.on("send_message", data => {
  //     console.log(data);
  //     socket.to(data.room).emit("receive_message", data);
  //   });
  // });
  
  // 전송 버튼에 넣고 조회 시 작성 자 정보의 아이디와 내 아이디를 합쳐서 뭔가를 만들면 될듯
  // const JoinRoom = (e) => {
  //   if (room !== "") {
  //     socket.emit("join_room", room);
  //   }
  // };

  const scrollToBottom = () => {
    if ((scrollRef.current)) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  let today = new Date();
  today = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  
  return (
    <ChattingContainer>
      <div className='inner'>
        <div className='userinfo-box'>
          <div>
            <img src='https://i.namu.wiki/i/Bge3xnYd4kRe_IKbm2uqxlhQJij2SngwNssjpjaOyOqoRhQlNwLrR2ZiK-JWJ2b99RGcSxDaZ2UCI7fiv4IDDQ.webp' />   
            <p><span>만식이</span></p>
          </div>
          <div>
            <img src='https://i.namu.wiki/i/Bge3xnYd4kRe_IKbm2uqxlhQJij2SngwNssjpjaOyOqoRhQlNwLrR2ZiK-JWJ2b99RGcSxDaZ2UCI7fiv4IDDQ.webp' />   
            <p><span>만식이</span></p>
          </div>
        </div>
        <div className='chattinglist-box'>
          <div className='chattinglist-inner-box'>
            <img src='https://i.namu.wiki/i/Bge3xnYd4kRe_IKbm2uqxlhQJij2SngwNssjpjaOyOqoRhQlNwLrR2ZiK-JWJ2b99RGcSxDaZ2UCI7fiv4IDDQ.webp' />
            <div className='chattinglist-userinfo-box'>
              <div className='sort'>
                <p><span>중식이</span></p>
                <p>어제</p>   
              </div>
              <p>대화내용</p>
            </div>
          </div>
          <div className='chattinglist-inner-box'>
            <img src='https://i.namu.wiki/i/Bge3xnYd4kRe_IKbm2uqxlhQJij2SngwNssjpjaOyOqoRhQlNwLrR2ZiK-JWJ2b99RGcSxDaZ2UCI7fiv4IDDQ.webp' />
            <div className='chattinglist-userinfo-box'>
              <div className='sort'>
                <p><span>디디</span></p>
                <p>어제</p>   
              </div>
              <p>대화내용</p>
            </div>
          </div>
          { chats.map(chat => {
            return (
              <div className='chattinglist-inner-box' key={chat.user} onClick={() => {handleToChatroom(chat.user)}}>
                <img src='https://i.namu.wiki/i/Bge3xnYd4kRe_IKbm2uqxlhQJij2SngwNssjpjaOyOqoRhQlNwLrR2ZiK-JWJ2b99RGcSxDaZ2UCI7fiv4IDDQ.webp' />
                <div className='chattinglist-userinfo-box'>
                  <div className='sort'>
                    <p><span>{chat.user}</span></p>
                    <p>어제</p>   
                  </div>
                  <p>{chat.msg}</p>
                </div>
              </div>
            )
          })
        }
        </div>
        <div className='chatting-box' >
          <div className='sellerinfo-box'>
            <p><span>{chatDetail[0]?.user}</span></p>
          </div>
          <div ref={scrollRef} className='chatting-detail-box'>
          { chatDetail.map((chat, index) => {
            return (
              <>
                {index === 0 && <p className='day'>{today}</p>}
                <p className='message-notme-box'>{chat.msg}</p>
                {/* 유저가 나(로그인한사람)일 때 보여줘야함 */}
                {chat.user2 && <p className='message-box'>{chat.msg}</p>}
              </>
            )
          })}
          </div>


          {/* { chatDetail.map((chat, index) => {
            return (
              <>
                <div className='sellerinfo-box'>
                  <p><span>{chat.user}</span></p>
                </div>
                <div ref={scrollRef} className='chatting-detail-box'>
                  {index === 0 && <p className='day'>{today}</p>}
                  <p className='message-box'></p>
                  <p className='message-notme-box'>{chat.msg}</p>
                </div>
              </>
            )
          })} */}

          <div className='chatting-input-box' >
            <textarea
              value={value} 
              onChange={valueOnChange} 
              onKeyUp={(e) => { if (e.key === 'Enter') {handleSubmitMessage()} }}
              placeholder='메시지를 입력해주세요'
            />
            <button onClick={handleSubmitMessage}>전송</button>
          </div>
        </div>
      </div>
    </ChattingContainer>
  );
}

export default Chatting;