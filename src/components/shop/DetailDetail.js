import React from 'react';
import styled from 'styled-components';
import dog from "../../image/dog.png";
import { useNavigate } from 'react-router';
import { getLoginUser } from '../../features/userInfoSlice';
import { useSelector } from 'react-redux';


const DetailBox = styled.div`
  margin: 50px auto;
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
  .top-wrap {
    width: 100%;
    height: 200px;
    border: 2px solid #eee;
    border-radius: 10px;
    box-shadow: 0 0 10px #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
  }
  .top-wrap img {
    width: 150px;
    height: 150px;
  }
  .top-wrap .top-text {
    width: 60%;
  }
  .top-wrap .top-text p{
    margin-bottom: 7px;
  }
  .top-wrap .top-text .weight::before {
    content: '';
    display: inline-block;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: #999;
    margin: 0px 5px 5px;
  }
  .top-wrap .top-text .type {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .top-wrap .top-text p:last-child {
    font-weight: bold;
    color: #555;
  }
  .top-wrap .name {
    font-weight: bold;
    font-size: 25px;
    color: #555;
  }
  .top-wrap .top-myPage {
    width: 10%;
    align-self: flex-start;
    padding: 20px 0px 0px 0px ;
    font-weight: bold;
    color: #555;
  }
  .top-wrap .top-myPage .more::after {
    content: '';
    width: 13px;
    height: 13px;
    margin-left: 5px;
    border-top: 2px solid #68a6fe;
    border-right: 2px solid #68a6fe;
    display: inline-block;
    transform: rotate(42deg);
  }
  .top-wrap-copy {
    width: 100%;
    height: 200px;
    border: 2px solid #eee;
    border-radius: 10px;
    box-shadow: 0 0 10px #eee;
    background-color:rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .top-wrap-copy h2 {
    text-align: center;
    font-weight: bold;
    font-size: 25px;
    color: #fff;
  }
  .top-wrap-copy .login-btn {
    text-align: center;
    margin-top: 20px;
    background-color: #68a6fe;
    color: #fff;
    width: 170px;
    padding: 10px 0px;
    border-radius: 20px;
    font-weight: bold;
  }
  .top-wrap-copy .login-btn::after {
    content: '';
    width: 10px;
    height: 10px;
    margin-left: 5px;
    margin-bottom: 1px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    display: inline-block;
    transform: rotate(42deg);
  }
`;

function DetailDetail(props) {
  const { title, price, rate, content, age, size, brand } = props.product;
  const navigate = useNavigate();
  const loginUser = useSelector(getLoginUser);

  return (
    <DetailBox>
      <h1>강아지 정보🔎</h1>
        {
          loginUser ? (
            <div className='top-wrap'>
              <img src={dog} alt='강아지 프로필 사진'/>
              <div className='top-text'>
                <p className='name'>{loginUser.signDogName}</p>
                <span>{loginUser.signDogAge}살</span>
                <span className='weight'>{loginUser.weight}kg</span>
                <p className='type'>{loginUser.signDogType}</p>
              </div>
              <div className='top-myPage cursor-pointer' onClick={() => {navigate('/mypage')}}>
                <span className='more'>더보기</span>
              </div>
            </div>
          ) : (
            <div className='top-wrap-copy'>
              <h2>지금 로그인하고 <br className='mg-t' /> 내 강아지에게 맞는 상품인지 확인해보세요!</h2>
              <span className='login-btn cursor-pointer' onClick={() => {navigate('/login')}}>로그인/회원가입</span>
            </div>
          )
        }
        
      
        
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
              {rate ? 
                <td>{rate}점</td>
                :<td>평점없음</td>
              }
              <th>가격</th>
              <td>{price}원</td>
            </tr>
            <tr>
              <th>권장 나이</th>
              <td>{age === 'junior' ? '0~5살'
                  :age === 'adult' ? '6~10살'
                  : '11살 이상'}</td>
              <th>권장 크기</th>
              <td>{size === 'small' ? '소형견'
                  :size === 'medium' ? '중형견'
                  : '대형견'}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </DetailBox>
  );
}

export default DetailDetail;