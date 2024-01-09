import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const QnABox = styled.div`
  margin: 0 auto;
  width: 83%;

  .btnBox {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    h1 {
      font-size: 30px;
      font-weight: bold;
      color: #68a6fe;
    }
    button {
      /* width: 100px; */
      height: 50px;
      border: none;
      background-color: #68a6fe;
      border-radius: 5px;
      color: white;
      font-size: 18px;
      font-weight: bold;
      border-radius: 10px;
    }
    button:hover {
      background-color: #5396f5;
    }
  }
  p b {
    font-weight: bold;
  }
  .tableBox {
    margin-top: 50px;
    width: 100%;
    text-align: center;
    line-height: 75px;

    table {
      width: 100%;
    }
    tr {
      border: 1px solid #ccc;
      margin: 20px;
      height: 60px;
    }
    .firstLine {
      background-color: #f4f4f4;
    }
    .status {
      width: 20%;
    }
    .title {
      width: 50%;
    }
    .date {
      width: 20%;
    }
    .borderBottom.active {
      border-bottom: none;
    }
    .contentTr {
      border-top: none;
      line-height: 20px;
      transition: 1s;
    }
  }
`;

function DetailQnA(props) {
  const { postId } = props;
  const navigate = useNavigate();
  const [ qna, setQna ] = useState([]);
  const [ text, setText ] = useState(false);


  useEffect(() => {
    const getQnA = async () => {
      try {
        const result = await axios.get(`http://localhost:8888/shop/qna/${postId}`);
        setQna(result.data);
      } catch (err) {
        console.error(err);
      }
    };
    getQnA();
  }, []);

  return (
    <QnABox>
      <div className='btnBox'>
        <h1>상품 문의📞</h1>
        {/* <button onClick={() => {navigate(`/shop/detail/${productId}/quest`)}}>문의하기</button> */}
        <button className='cursor-pointer' onClick={() => {navigate(`/shop/detail/quest`)}}>문의하기</button>
      </div>
      <p>구매한 상품의 취소/반품은 구매내역에서 신청 가능합니다.</p>
      <p>상품문의 및 후기게시판을 통해 취소나 환불, 반품 등은 처리되지 않습니다.</p>
      <p>가격, 판매자, 교환/환불 및 배송 등 해당 상품 자체와 관련 없는 문의는 고객센터 내 1:1 문의를 이용해주세요.</p>
      <p><b>해당 상품 자체와 관계없는 글, 양도, 광고성, 욕설, 비방, 도배 등의 글은 예고 없이 이동, 노출제한, 삭제 등의 조치가 취해질 수 있습니다.</b></p>
      <p>공개 게시판이므로 전화번호, 메일 주소 등 고객님의 소중한 개인정보는 절대 남기지 말아주세요.</p>

      <div className='tableBox'>
        <table>
          <colgroup>
            <col className='status' />
            <col className='title' />
            <col className='author' />
            <col className='date' />
          </colgroup>
          <tr className='firstLine'>
            <th scope='col' className='status'>답변상태</th>
            <th scope='col' className='title'>제목</th>
            <th scope='col' className='author'>작성자</th>
            <th scope='col' className='date'>작성일</th>
          </tr>
          <tbody>
            {/* <tr className={text ? 'borderBottom active' : 'borderBottom'}>
              <td className='status'>답변대기</td>
              <td className='title cursor-pointer' onClick={() => {setText(prev=>!prev)}}>맛없어요</td>
              <td className='author'>qwer</td>
              <td className='date'>2020-20-20 20:20</td>
            </tr>
            {text && <tr className='contentTr'>
              <td></td>
              <td className='title'>게으른빠가들은나가난천재로태어나가가가가가가가가한국에서나보다랩만은랩있으면난와</td>
            </tr>} */}

            {qna ? qna.map((item) => {
              const { status, title, content, author, date } = item;
              <tr className={text ? 'borderBottom active' : 'borderBottom'}>
                <td className='status'>{status}</td>
                <td className='title cursor-pointer' onClick={() => {setText(prev=>!prev)}}>{title}</td>
                <td className='author'>{author}</td>
                <td className='date'>{date}</td>
              </tr>
              {text && <tr className='contentTr'>
                <td></td>
                <td className='title'>{content}</td>
              </tr>}
            }) 
            :
            <tr>
              <td colSpan={4}>문의가 없습니다.</td>
            </tr>
            }
          </tbody>
        </table>
      </div>
    </QnABox>
  );
}

export default DetailQnA;