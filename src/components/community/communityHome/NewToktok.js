import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToktokList } from '../../../features/dailyDogSlice';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router';
import nophoto from '../../../image/nophoto.jpg'


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
  const { items } = props;

  console.log(items);

  const navigate = useNavigate();
  const testList = useSelector(selectToktokList);
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

          {items.map(item => {
            return (
              <tr key={item._id} onClick={() => navigate(`/community/Toktok/${item.author}`)}>
                <td><img src={item.imgUrl[0] ? item.imgUrl[0] : nophoto} /></td>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td>{item.user.signUserNicname}</td>
                <td>{item.view.length}</td>
              </tr>
            )          
          }
          )}
        </tbody>
      </StyledTable>


    </NewToktokContainer>
  );
}

export default NewToktok;