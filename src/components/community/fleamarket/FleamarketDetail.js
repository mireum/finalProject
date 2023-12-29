import React, { useEffect, useState } from 'react';
import { getFleamarketById } from '../../../api/communityAPI';
import { useParams } from 'react-router';
import testImage from '../../../images/app.jpg'
import styled from 'styled-components';

const FleamarketDetailContainer = styled.div`
  max-width: 1200px;
  min-height: 800px;
  margin: 70px auto;

  .abcd {
    max-width: 600px;
    margin: 0 auto;

    h1 {
    font-size: 18px;
    text-align: center;
    }

    img {
      width: 50%;
      display: block;
      margin: 0 auto;
    }
  }
`;


// const ItemImage = styled.img`
//   width: 30%;
// `;


function FleamarketDetail(props) {

  // const [ item, setItem ] = useState(null);

  // useEffect(() => {
  //   const getItem = async () => {
  //     const result = await getFleamarketById();
  //     setItem(result);
  //   } 
  //   getItem();
  // }, []);

  // if (!item) {
  //   return null;
  // }

  const test = [
    {
      id: 1,
      title: '첫번째 물품',
      price: 10000,
      place: '경기도 화성시'
    },
    {
      id: 2,
      title: '두번째 물품',
      price: 20000,
      place: '경기도 평택시'
    },
    {
      id: 3,
      title: '세번째 물품',
      price: 15000,
      place: '서울시 구로구'
    },
    {
      id: 4,
      title: '네번째 물품',
      price: 8000,
      place: '인천시 계양구'
    }
  ]
  
  const [ item, setItem ] = useState('');
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const getItem = async () => {
      const result = await test.filter(item => item.id == id);
      setItem(result);
    } 
    getItem();
  }, []);

  if (!item) {
    return null;
  }



  return (
    <FleamarketDetailContainer>
      <div className='abcd'>
        <img src={testImage} />
        <h1>{item[0].title}</h1>
        <h1>{item[0].price}</h1>
        <h1>{item[0].place}</h1>
      </div>
    </FleamarketDetailContainer>
  );
}

export default FleamarketDetail;