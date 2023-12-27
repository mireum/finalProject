import React from 'react';
import styled from 'styled-components';

const ExchanBox = styled.div`
  margin: 0 auto;
  width: 83%;

  h1 {
    margin: 30px 0;
    font-size: 30px;
    font-weight: bold;
    color: #68a6fe;
    span {
      color: #bbb;
      font-size: 14px;
    }
  }
  p {
    margin: 20px 0;
  }

`;

function DetailExchange(props) {
  return (
    <ExchanBox>
      <h1>반품/교환 안내📢 <span>교환/반품에 관한 일반적인 사항은 판매자가 제시사항보다 관계법령이 우선합니다.</span></h1>

      <div>반품/교환 사유에 따른 요청 가능 기간</div>
      <div>반품/교환 시 먼저 판매자와 연락하여 합의 후 반품접수를 해주셔야 하며, 반품접수 없이 임의로 보낼 경우 환불이 불가할 수 있으니 유의하시기 바랍니다</div>
      <p>1. 구매자 단순 변심은 상품 수령 후 7일 이내(구매자 반품배송비 부담)</p>
      <p>2. 표시/광고와 상이, 상품하자의 경우 상품 수령 후 3개월 이내 혹은 표시/광고와 다른 사실을 안 날로부터 30일 이내(둘 중 하나 경과 시 반품/교환 불가)</p>
    </ExchanBox>
  );
}

export default DetailExchange;