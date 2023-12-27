import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToktokList } from '../../../features/dailyDogSlice';
import axios from 'axios';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router';

const NewToktokContainer = styled.div`
  margin-top: 10px;

  img {
    width: 50px;
    height: 50px;
  }

  span {
    font-weight: bold;
  }
`;

const StyledTable = styled(Table)`
  text-align: center;

  tbody {
    cursor: pointer;
  }

  tr {
    border-bottom: 1px solid #ccc;
  }

  td {
    vertical-align: middle;
  }

  thead tr {
    font-weight: bold;
  }

  & th:first-child {
    width: 10%;
  }

  & th:nth-child(2) {
    width: 30%;
  }

  & th:nth-child(3) {
    width: 40%;
  }

  & th:nth-child(4  ) {
    width: 10%;
  }

  & th:last-child {
    width: 10%;
  }
`;

function NewToktok(props) {
  const navigate = useNavigate();
  const testList = useSelector(selectToktokList);
  
  // 육아톡톡의 최신글 5개 요청
  // const [ data, setData ] = useState([]);

  // useEffect(() => {
  //   const newData = async () => {
  //     try {
  //       const response = await axios('');
  //       setData(response.data)
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  //   newData();
  // }, [])

  return (
    <NewToktokContainer>
      <StyledTable responsive="sm">
        <thead>
          <tr>
            <th></th>
            <th>제목</th>
            <th>내용</th>
            <th>작성자</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {testList.slice(Math.max(testList.length - 5, 0)).map((item, index) => 
            (
              <>
                <tr key={index} onClick={() => navigate(`/community/Toktok/${item.author}`)}>
                  <td><img src='https://image.msbg.io/?p=mocoblob.blob.core.windows.net%2Fassets%2Fmagazine%2Fimg%2F14_1645407745856_0.png&w=285&h=285' /></td>
                  <td>{item.title}</td>
                  <td>{item.content}</td>
                  <td>{item.author}</td>
                  <td>{item.view}</td>
                </tr>
              </>
            )
          )}
        </tbody>
      </StyledTable>


    </NewToktokContainer>
  );
}

export default NewToktok;