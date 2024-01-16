import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToktokList } from '../../../features/dailyDogSlice';
import axios from 'axios';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router';
import { Fragment } from 'react';

const NewToktokContainer = styled.div`
  margin-top: 20px;

  img {
    width: 40px;
    height: 40px;
  }

  span {
    font-weight: bold;
  }
`;

const StyledTable = styled(Table)`
  /* react-bootstrap/Table 지정한 width값 고정 */
  table-layout: fixed;
  text-align: center;


  tbody {
    cursor: pointer;
  }

  tr {
    border-bottom: 1px solid #ccc;
  }

  td {
    vertical-align: middle;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  thead tr {
    font-weight: bold;
  }

  & th:first-child, td:first-child {
    width: 10%;
  }

  & th:nth-child(2), td:nth-child(2) {
    width: 20%;
  }
  
  & th:nth-child(3) {
    width: 50%;
  }

  & th:nth-child(4), td:nth-child(4)  {
    width: 10%;
  }

  & th:last-child, td:last-child {
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
          {testList.slice(Math.max(testList.length - 5, 0)).reverse().map((item, index) => 
            (
              <Fragment key={index}>
                <tr onClick={() => navigate(`/community/Toktok/${item.author}`)}>
                  <td><img src='https://image.msbg.io/?p=mocoblob.blob.core.windows.net%2Fassets%2Fmagazine%2Fimg%2F14_1645407745856_0.png&w=285&h=285' /></td>
                  <td>{item.title}</td>
                  <td>{item.content}</td>
                  <td>{item.author}</td>
                  <td>{item.view}</td>
                </tr>
              </Fragment>
            )
          )}
        </tbody>
      </StyledTable>


    </NewToktokContainer>
  );
}

export default NewToktok;