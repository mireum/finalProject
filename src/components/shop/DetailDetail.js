import React from 'react';
import styled from 'styled-components';

const DetailBox = styled.div`
  margin: 0 auto;
  width: 83%;

  h1 {
    margin: 30px 0;
    font-size: 24px;
    font-weight: bold;
  }
`;

function DetailDetail(props) {

  return (
    <DetailBox>
      <h1>상세정보</h1>
      <div>제목</div>    
      <div>상세설명</div>
      <div>추천 수</div>
      <div>권장 나이:</div>
      <div>권장 크기:</div>
    </DetailBox>
  );
}

export default DetailDetail;