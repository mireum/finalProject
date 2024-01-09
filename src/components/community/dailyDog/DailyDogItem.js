import React from 'react';
import nophoto from '../../../images/nophoto.jpg'
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
  const { item: { id, title, imgUrl } } = props;

  const navigate = useNavigate();

  return (
    <>
      <StyledCol md={4} onClick={() => navigate(`/community/dailyDog/${id}`)}>
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