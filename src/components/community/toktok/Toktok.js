import ToktokItem from './ToktokItem';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ToktokWrapper = styled.div`
  margin: 0 auto;
  width: 1208px;
  height: 1000px;
  background-color: #fff;
  h1 {
    font-size: 44px;
    font-weight: bold;
    color: #000;
    padding: 10px 20px;
  }
  .between {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
  .test {
    font-size: 33px;
    color: red;
    background-color: beige;
  }
`;

function Toktok(props) {
  const navigate = useNavigate();

  const test = [
    {
      title: '1111',
      content: '2222',
      author: '준우강아지',
      img: '사진들어감',
      like: 0,
      view: 0,
      comment: 0, // 나중에 댓글 컬렉션에서 따로 보내줌
    }, {
      title: '3333',
      content: '4444',
      author: '지민강아지',
      img: '사진들어감',
      like: 0,
      view: 0,
      comment: 0,
    }, {
      title: '5555',
      content: '6666',
      author: '지우강아지',
      img: '사진들어감',
      like: 0,
      view: 0,
      comment: 0,
    }, {
      title: '5555',
      content: '6666',
      author: '하은강아지',
      img: '사진들어감',
      like: 0,
      view: 0,
      comment: 0,
    }, {
      title: '5555',
      content: '6666',
      author: '민수강아지',
      img: '사진들어감',
      like: 0,
      view: 0,
      comment: 0,
    },
  ];

  return (
    <ToktokWrapper>
      <h1>육아톡톡</h1>
      <br /><br />
      <div className='between'>
        <span>반려 생활 중 고민거리, 궁금증이 있으신가요? 지금 바로 질문해 보세요</span>
        <button onClick={() => { navigate(`/community/insert/toktok`) }}>질문하러 가기</button>
      </div>
      <br /><hr />
      <div>
        {test.map((testMap) => { // 게시글들 맵
          return <ToktokItem
            title={testMap.title}
            content={testMap.content}
            author={testMap.author}
            img={testMap.img}
            like={testMap.like}
            view={testMap.view}
            comment={testMap.comment}
          />
        })}
      </div>



    </ToktokWrapper>
  );
}

export default Toktok;