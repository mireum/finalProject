import React from 'react';
import styled from 'styled-components';

const DetailBox = styled.div`
  margin: 0 auto;
  width: 83%;

  h1 {
    margin: 30px 0;
    font-size: 30px;
    font-weight: bold;
    color: #68a6fe;
  }
  .tableBox {
    margin: 30px 0;
    width: 100%;
    text-align: center;
    line-height: 65px;

    table {
      width: 100%;
    }
    tr {
      border: 1px solid #ccc;
      margin: 20px;
      th {
        background-color: #f2f2f2;
      }
    }
  }
`;

function DetailDetail(props) {
  const { title, price, rate, brand, age, size } = props.product;

  return (
    <DetailBox>
      <h1>상세정보🔍</h1>
      <div className='tableBox'>
        <table>
          <colgroup>
            <col width='10%'/>
            <col width='40%'/>
            <col width='10%'/>
            <col width='40%'/>
          </colgroup>
          <tbody>
            <tr>
              <th>상품명</th>
              <td>{title}</td>
              <th>브랜드</th>
              <td>{brand}</td>
            </tr>
            <tr>
              <th>평점</th>
              <td>{rate}점</td>
              <th>가격</th>
              <td>{price}원</td>
            </tr>
            <tr>
              <th>권장 나이</th>
              <td>{age}</td>
              <th>권장 크기</th>
              <td>{size}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </DetailBox>
  );
}

export default DetailDetail;