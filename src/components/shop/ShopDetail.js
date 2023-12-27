import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import feed from "../../image/feed.jpg";
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { clearSelectedProduct, getSelectedProduct, selectSelectedProduct } from '../../features/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import DetailReview from './DetailReview';
import DetailDetail from './DetailDetail';
import DetailQnA from './DetailQnA';
import DetailExchange from './DetailExchange';
import { addItemToCart } from '../../features/cartSlice';
import ShopModal from './ShopModal';
import PayModal from './PayModal';

const ShopContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .detail {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .detail .detail-img .img{
    background-image: url(${feed});
    background-position: center;
    background-size: 500px 500px;
    border-radius: 10px;
    border: 0.5px solid #cdcdcd;
    width: 500px;
    height: 500px;
  }
 
  .detail .detail-text p,
  .detail .detail-text h3,
  .detail .detail-text h4 {
    font-weight: bold;
    /* font-size: 30px; */
  }
  .detail .detail-text p {
    font-size: 16px;
    color: #cdcdcd;
    margin-bottom: 10px;
  }
  .detail .detail-text h3 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }
  .detail .detail-text h4 {
    font-size: 24px;
    color: #666;
    margin-bottom: 30px;
  }
  .detail .detail-text .text1 {
    font-weight: bold; 
  }
  .detail .detail-text .text1::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 15px;
    /* text-align: center; */
    /* color: #333; */
    background-color: #666;
    margin-left: 10px;
  }

  .detail .detail-text .text2 {
    color: #666;
    margin-left: 40px;
    font-weight: bold; 
  }

  .detail .detail-btn {
    margin-top: 50px;
    
  }
  .detail .detail-btn button {
    font-size: 20px;
    width: 47%;
    font-weight: bold;
    background-color: #fff;
    border-radius: 15px;
    padding: 7px 0px;
    border: 2px solid #cdcdcd;
  }
  .detail .detail-btn button + button {
    margin-left: 5%;
  }
  .detail .detail-btn .cart {
    color: #333;
    border: 2px solid #68a6fe;
  }
  .detail .detail-btn .cart:hover {
    background-color: #e6dfdf;
  }

  .detail .detail-btn .buy {
    color: #fff;
    background-color: #68a6fe;
    border: 2px solid #68a6fe;
    
  }
  .detail .detail-btn .buy:hover {
    background-color: #5396f5;
  }
`;

const TabContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const NavBox = styled(Nav)`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const ItemBox = styled(Nav.Item)`
  width: 25%;
  height: 50px;
  text-align: center;
  padding: 14px 0;
  font-size: 20px;
  /* border: 1px solid #000; */

  :hover {
    color: #68a6fe;
  }
  .active {
    color: #68a6fe;
    border-bottom: 1px solid black;
  }
`;

const LinkBox = styled(Nav.Link)`
  text-decoration: none;
  color: #000;
`;

// const ModalContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   position: fixed;
//   top: 0;
//   left: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: rgba(0, 0, 0, 0.5);

//   .modalContent {
//     background-color: #ffffff;
//     width: 250px;
//     height: 150px;
//     padding: 15px;
//   }
// `;

function ShopDetail(props) {
  // const { productId } = useParams(); // app.js에서 지은
  const dispatch = useDispatch();
  const [ productCount, setProductCount ] = useState(1);
  const [showTab, setShowTab] = useState('detail');
  const [showModal, setShowModal] = useState(false);
  const [showBuyModal, setShowBuyModal] = useState(false);
  // const product = useSelector(selectSelectedProduct);

  const handleMinus = () => {
    if (productCount != 1) setProductCount(productCount-1);
  };

  const handlePlus = () => {
    setProductCount(productCount+1);
  };

  const handleCart = () => {
    // dispatch(addItemToCart({ ...product, count: productCount }));
    setShowModal(true);
  }

  const handleBuy = () => {
    setShowBuyModal(true);
  };
 
  // useEffect(() => {
  //   // 서버에 특정 상품의 데이터 요청
  //   const fetchProductById = async () => {
  //     try {
  //       const response = await axios.get(`라우터주소${productId}`);
  //       dispatch(getSelectedProduct(response.data))
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchProductById();

  //   return () => {
  //     dispatch(clearSelectedProduct());
  //   };
  // }, []);


  // if (!product) {
  //   return null; // store에 상품 없을 때 아무것도 렌더링하지 않음
  // } 
  // const modalBackground = useRef();

  return (
    <ShopContainer>
      <div className='detail'>
        <div className='detail-img'>
          <img className='img'/>
        </div>
        <div className='detail-text'>
          <p>프로도기</p>
          <h3>퍼펙션 패드 소형 베이비파우더향 30매</h3>
          <h4>{18000 * productCount}원</h4>
          <span className='text1'>수량</span>
          <span className='text2'>
            <button type='button' onClick={handleMinus}>-</button>
            {productCount}
            <button type='button' onClick={handlePlus}>+</button>
            </span><br />
          <span className='text1'>배송방법</span>
          <span className='text2'>무료배송</span>
          <div className='detail-btn'>
            <button 
              type='submit' 
              className='cart cursor-pointer'
              onClick={handleCart}
            >장바구니</button>
            <button type='submit' className='buy cursor-pointer'
              onClick={handleBuy}
            >구매하기</button>
          </div>
          {showBuyModal && <PayModal show={showBuyModal}/>}
          {/* {showBuyModal && 
            <ModalContainer className='modalContainer' ref={modalBackground} onClick={(e) => {
              if (e.target === modalBackground.current) {
                setShowBuyModal(false);
              }
            }}>
              <div className='modalContent'>
                <p>모달임요</p>
                <button onClick={() => {setShowBuyModal(false)}}>닫기</button>
              </div>

            </ModalContainer>
          } */}

        </div>
      </div>

      
      <TabContainer>
      <NavBox variant="tabs" defaultActiveKey="link-0" className='my-3'>
        <ItemBox>
          <LinkBox eventKey="link-0" onClick={() => setShowTab('detail')}>상세정보</LinkBox>
        </ItemBox>
        <ItemBox>
          <LinkBox eventKey="link-1" onClick={() => setShowTab('review')}>상품리뷰</LinkBox>
        </ItemBox>
        <ItemBox>
          <LinkBox eventKey="link-2" onClick={() => setShowTab('qa')}>Q&amp;A</LinkBox>
        </ItemBox>
        <ItemBox>
          <LinkBox eventKey="link-3" onClick={() => setShowTab('exchange')}>반품/교환정보</LinkBox>
        </ItemBox>
      </NavBox>
      {
        {
          // props로 item정보 넘겨줌
          'detail': <div><DetailDetail /></div>,
          'review': <div><DetailReview /></div>,
          // qa엔 productId줌
          'qa': <div><DetailQnA /></div>,
          'exchange': <div><DetailExchange /></div>
        }[showTab]
      }
      </TabContainer>
      
      {showModal && <ShopModal />}

    </ShopContainer>
  );
}

export default ShopDetail;