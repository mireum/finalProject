import React from 'react';
import styled from 'styled-components';

const ShopContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function ShopDetail(props) {
  return (
    <ShopContainer>
      <div className='detail'>
        <div className='detail-img'>
          <img />
        </div>
        <div>
          <p>브랜드명</p>
        </div>
      </div>
    </ShopContainer>
  );
}

export default ShopDetail;