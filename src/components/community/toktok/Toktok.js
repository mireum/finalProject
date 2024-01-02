import ToktokItem from './ToktokItem';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Pagination from 'react-js-pagination';
import { useState } from 'react';

const ToktokWrapper = styled.div`
  margin: 0 auto;
  width: 1208px;
  height: 1000px;
  background-color: #fff;
  padding: 0 20px;
  h1 {
    font-size: 44px;
    font-weight: bold;
    color: #000;
    padding: 10px 0;
  }
  .between {
    display: flex;
    justify-content: space-between;
  }
  .test {
    font-size: 33px;
    color: red;
    background-color: beige;
  }
`;

const PagWrapper = styled.div` // 페이지네이션
.pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  ul.pagination li:first-child{
    border-radius: 5px 0 0 5px;
  }

  ul.pagination li:last-child{
    border-radius: 0 5px 5px 0;
  }
  
  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
  }
  
  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: #337ab7;
  }
  
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }
  
  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;

function Toktok(props) {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
    console.log(page);
    // navigate(`/community/Toktok/p/${page}`)
  };

  const test = [
    {
      _id: '001',
      title: '1111',
      content: '2222',
      author: '준우강아지', // 로그인 정보
      img: 'https://picsum.photos/100/100',
      like: 1,
      view: 2,
      comment: 3, // 나중에 댓글 컬렉션에서 따로 보내줌 commentList.length 로 하면 될듯??
    }, {
      _id: '002',
      title: '3333',
      content: '4444',
      author: '지민강아지',
      img: 'https://picsum.photos/100/100',
      like: 4,
      view: 5,
      comment: 6,
    }, {
      _id: '003',
      title: '5555',
      content: '6666',
      author: '지우강아지',
      img: 'https://picsum.photos/100/100',
      like: 7,
      view: 8,
      comment: 9,
    }, {
      _id: '004',
      title: '5555',
      content: '6666',
      author: '하은강아지',
      img: 'https://picsum.photos/100/100',
      like: 0,
      view: 0,
      comment: 0,
    }, {
      _id: '005',
      title: '5555',
      content: '6666',
      author: '민수강아지',
      img: 'https://picsum.photos/100/100',
      like: 0,
      view: 0,
      comment: 0,
    },
  ];

  return (
    <ToktokWrapper>
      <PagWrapper>
        <Pagination
          activePage={page}
          itemsCountPerPage={3}
          totalItemsCount={test.length}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange} />
      </PagWrapper>
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
            _id={testMap._id}
            title={testMap.title}
            content={testMap.content}
            author={testMap.author}
            img={testMap.img}
            like={testMap.like}
            view={testMap.view}
            comment={testMap.comment}
          />
        }).slice(((page + page + page) - 3), (page + page + page))}
      </div>


    </ToktokWrapper>
  );
}

export default Toktok;