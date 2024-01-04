import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Parser from 'html-react-parser'
import styled from 'styled-components';
import axios from 'axios';

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
    min-height: 600px;
  }

  .comment-box {
    padding-top: 20px;
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
          padding: 10px;
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

        div {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }

        span {
          font-weight: bold;
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
      <div className='comment-box'>
        <div className='comment-detail-box'>
          <h2>댓글 2</h2>
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
              comments.map(comment => 
                {
                  return (
                    <div className='comment-one-box' key={comment._id}>
                      <img src='https://i.namu.wiki/i/Bge3xnYd4kRe_IKbm2uqxlhQJij2SngwNssjpjaOyOqoRhQlNwLrR2ZiK-JWJ2b99RGcSxDaZ2UCI7fiv4IDDQ.webp'/>
                      <div>
                        <p><span>작성자</span></p>
                        <p>{comment.comment}</p>
                      </div>
                    </div>
                  ) 
                }
              )
            }
          </div>
        </div>
        </div>
    </DailyDogDetailContainer>
  );
}

export default DailyDogDetail;