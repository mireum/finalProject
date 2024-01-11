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
  const { toChat } = useParams();
  const isLogin = useSelector(getLoginUser);

  const [ update, setUpdate ] = useState('');
  const [ chats, setChats ] = useState([]);
  const [ chatDetail, setChatDetail ] = useState([]);
  const [ value, setValue ] = useState('');
  const [ sendId, setSendId ] = useState('');
  const [ room, setRoom ] = useState('');
  const [ userId, setUserId ] = useState(isLogin?.userId);
  
  // const socket = io.connect("http://localhost:8888");
  
  const valueOnChange = (e) => {
    setValue(e.target.value);
  };
  
  
  const socket = io.connect("http://localhost:8888");
  useEffect(() => {
    
  }, []);


  useEffect(() => {
    scrollToBottom();
  }, [chats]);


  // 스테이트로 접근해보기
  useEffect(() => {
    socket.on('updateChatDetail', (lastChat) => {
      console.log('디테일챗실행');
      setChatDetail(prev => [...prev, lastChat])
    })
  }, []);

  useEffect(() => {
    socket.on('update', (data) => {
      console.log('업데이트챗 실행');
      setUpdate(prev => [...prev, data.message])
    })
  }, []);

  useEffect(() => {
    console.log('유즈이펙트 실행');
    const getChatListHandler = async () => {
      
      const getChatList = await axios.get('http://localhost:8888/getChatHeaderList', {withCredentials: true});
      setChats(getChatList.data.chatData);
    };
    getChatListHandler();

  }, [update]);



  const handleToChatroom = async (id) => {

    setChatDetail([]);
    setSendId(id);
    console.log(id);
    const chatting = await axios.get(`http://localhost:8888/getChatting?id=${id}`, {withCredentials: true});
    console.log(chatting);
    if (chatting.data.resulte?.chatList) {
      setChatDetail(chatting.data.resulte.chatList);
      console.log('1리절트 실행');
    } else {
      setChatDetail(chatting.data.resulte2.chatList)
      console.log('2리절트 실행');
    }
  };

  const handleSubmitMessage = () => {

    const loginUser = isLogin.userId;
    const data = {
      msg: value,
      user2: sendId,
      id: loginUser,
      // id: '디디',
      room: loginUser,
      // room: '디디',
    }
    socket.emit('answer', data);
    setValue('');
    
  };
  const handleSubmitMessageDirect = (toChat) => {

    const loginUser = isLogin.userId;
    const data = {
      msg: value,
      user2: toChat,
      id: loginUser,
      // id: '디디',
      room: loginUser,
      // room: '디디',
    }
    socket.emit('answer', data);
    setValue('');
  };

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
          { chats?.map((chat, index) => {
            return (
              <div className='chattinglist-inner-box' key={index} onClick={() => {handleToChatroom(chat.user)}}>
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
                { chat.user !== isLogin.userId &&
                  <>
                    <p key={index} className='message-notme-box'>{chat.user}:</p>
                    <p className='message-notme-box'>{chat.msg}</p>
                  </>
                }
                    {/* 유저가 나(로그인한사람)일 때 보여줘야함 */}
                { chat.user == isLogin.userId &&
                  <>
                    <p key={index} className='message-box'>{chat.user}:</p>
                    <p className='message-box'>{chat.msg}</p>
                  </>
                }
              </>
            )
          })}
          </div>

          { sendId 
            ?
              <div className='chatting-input-box' >
                <textarea
                  value={value} 
                  onChange={valueOnChange} 
                  onKeyUp={(e) => { if (e.key === 'Enter') {handleSubmitMessage()} }}
                  placeholder='메시지를 입력해주세요'
                />
                <button onClick={handleSubmitMessage}>전송</button>
              </div>
            :
              <div className='chatting-input-box' >
                <textarea
                  value={value} 
                  onChange={valueOnChange} 
                  onKeyUp={(e) => { if (e.key === 'Enter') {handleSubmitMessageDirect(toChat)} }}
                  placeholder='메시지를 입력해주세요'
                />
                <button onClick={handleSubmitMessage}>전송</button>
              </div>
          }
        </div>
      </div>
    </ChattingContainer>
  );
}

export default Chatting;