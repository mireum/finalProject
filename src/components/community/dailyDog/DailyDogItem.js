import React from 'react';
import nophoto from '../../../images/nophoto.jpg'
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const StyledCol = styled(Col)`
  cursor: pointer;
  margin: 20px 0;

  &:hover img {
    transform: scale(1.03);
  }

  h2 {
    padding-top: 10px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 258px;
  border: 1px solid #ccc;
  border-radius: 10px 10px 0 0;
  transition: transform 0.5s;
`;

function DailyDogItem(props) {
  const { item: { _id, id, title, imgUrl } } = props;

  const navigate = useNavigate();

  const handleItemClick = async () => {
    await axios.patch(`http://localhost:8888/community/daily/view/${_id}`);
    navigate(`/community/dailyDog/${id}`)
  }

  return (
    <>
      <StyledCol md={4} onClick={handleItemClick}>
        {imgUrl[0] 
          ? <ItemImage src={imgUrl[0]} />
          : <ItemImage src={nophoto} /> 
        }
        <h2>{title}</h2>
      </StyledCol>
    
    </>
  );
}

export default DailyDogItem;