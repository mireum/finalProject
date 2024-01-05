import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Parser from 'html-react-parser'
import styled from 'styled-components';
import axios from 'axios';
import DailyDogComment from './DailyDogComment';
import { BiLike, BiDislike } from "react-icons/bi";

const DailyDogDetailContainer = styled.div`
  max-width: 1200px;
  min-height: 800px;
  margin: 70px auto;
  text-align: center;
  
  h1 {
    font-size: 20px;
    font-weight: bold;
  }

  img {
    width: 460px;
    height: 360px;
    margin: 16px 0;
  }

  .title-box {
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;

    .subtitle-box {
      display: flex;
      justify-content: flex-end;

      p {
        margin-left: 16px;
        font-size: 14px;
        color: #222;
        opacity: 0.7;
      }
    }
  }

  .content-box {
    margin: 40px auto;
    max-width: 460px;
    min-height: 500px;
  }

  .like-box {
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      width: 26px;
    }

    .like-btn {
      margin: 40px 10px;
      padding: 5px 10px;
      font-size: 50px;
      border: 1px solid #ccc;
      border-radius: 50%;
      background: none;
    }

    .up-btn-acitve {
      background-color: #B22222;
    }

    .down-btn-acitve {
      background-color: #4169E1;
    }
  }

  .comment-box {
    padding-top: 40px;
    border-top: 1px solid #ccc;

    .comment-detail-box {
      width: 70%;
      margin: 0 auto;

      h2 {
        font-size: 18px;
        font-weight: bold;
        text-align: left;
      }

      .comment-insert-box {
        margin-top: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;

        input {
          width: 90%;
          border: none;
          border-radius: 10px;
          padding: 10px 16px;

          &:focus {
            outline: none;
          }
        }

        button {
          width: 10%;
          border: none;
          background-color: #fff;
          color: #68a6fe;
          padding: 10px;
          font-weight: bold;
          font-size: 18px;
          border-radius: 50%;
        }
      }
    }

    .comment-list-box {

      img {
        width: 50px;
        height: 50px;
      }

      .comment-one-box {
        display: flex;

        .comment-user-box {
          padding: 10px;
          text-align: left;

          & p:first-child {
            padding: 10px 0;
          }

          & p:last-child {
            line-height: 24px;
          }

          
          .comment-expanded {
            
            p {
              padding: 0;
            }

            button {
              color: #68a6fe;
              border: none;
              background: none;
            }
          }
        }

        span {
          font-weight: bold;
          padding: 10px 0;
          margin-right: 10px;
        }

      }
    }
    
  }
`;

function DailyDogDetail(props) {
  const { id } = useParams();
  const [ item, setItem ] = useState('');
  const [ comments, setComments ] = useState([]);
  const [ newComment, setNewComment ] = useState('');
  const [ likeBtn, setLikeBtn ] = useState({
    upBtn: false,
    downBtn: false,
  });
  const [ likeCount, setLikeCount ] = useState({
    upCount: 0,
    downCount: 0,
  });

  const { upBtn, downBtn } = likeBtn;
  const { upCount, downCount } = likeCount;

  useEffect(() => {
    const dailyDogData = async () => {
      try {
        const responseItem = await axios.get('http://localhost:8888/community/daily');
        const getItemById = responseItem.data.data.filter(item => item.id == id);
        setItem(getItemById);
        const responseComment = await axios.get('http://localhost:8888/community/daily/comment', { params: { postId: getItemById[0]._id }});
        console.log(responseComment);
        setComments(responseComment.data);
      } catch (err) {
        console.error(err);
      }
    }
    dailyDogData();
  }, [])

  if (!item) {
    return null;
  }

  const handleCommentChange = (e) => {
    setNewComment(e.target.value)
  }

  const handleSubmitComment = async () => {

    try {
      const date = new Date();
      await axios.post('http://localhost:8888/community/daily/comment/insert', { postId: item[0]._id , newComment, date }); 
      const responseComment = await axios.get('http://localhost:8888/community/daily/comment', { params: { postId: item[0]._id }}); 
      setComments(responseComment.data);
    } catch (err) {
      console.error(err);
    }
    setNewComment('');
  }

  const toggleLikeUpBtn = () => {
    setLikeBtn(prev => ({ ...prev, upBtn: !upBtn, downBtn: false }));
    
    if (!upBtn) {
      setLikeCount(prev => ({ ...prev, upCount: 1, downCount: 0 }))
    } else {
      setLikeCount(prev => ({ ...prev, upCount: 0 }))
    }
  }
  
  const toggleLikeDownBtn = () => {
    setLikeBtn(prev => ({ ...prev, downBtn: !downBtn, upBtn: false }));

    if (!downBtn) {
      setLikeCount(prev => ({ ...prev, downCount: -1, upCount: 0 }))
    } else {
      setLikeCount(prev => ({ ...prev, downCount: 0 }))
    }
  }

  return (
    <DailyDogDetailContainer>
      <div className='title-box'>
        <h1>{item[0].title}</h1>
        <div className='subtitle-box'>
          <p>작성자</p>
          <p>작성일</p>
          <p>조회 1</p>
        </div>
      </div>
      <div className='content-box'>
        {Parser(item[0].content)}
      </div>
      <div className='like-box'>
        <p>{downCount}</p>
        <button 
          className={`like-btn ${downBtn && 'down-btn-acitve'}`} 
          onClick={toggleLikeDownBtn}
          >
          <BiDislike />
        </button>
        <button 
          className={`like-btn ${upBtn && 'up-btn-acitve'}`} 
          onClick={toggleLikeUpBtn}
        >
          <BiLike />
        </button>
        <p>{upCount}</p>
      </div>
      <div className='comment-box'>
        <div className='comment-detail-box'>
          <h2>댓글 {comments.length}</h2>
          <div className='comment-insert-box'>
            <input 
              type='text' 
              value={newComment} 
              onChange={handleCommentChange}
              onKeyUp={(e) => { if (e.key === 'Enter') {handleSubmitComment()} }}
            />
            <button onClick={handleSubmitComment}>등록</button>
          </div>
          <div className='comment-list-box'>
            {comments &&
              comments.map((comment, index) => <DailyDogComment key={index} comment={comment} />)
            }
          </div>
        </div>
        </div>
    </DailyDogDetailContainer>
  );
}

export default DailyDogDetail;