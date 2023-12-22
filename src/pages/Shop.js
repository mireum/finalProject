import React from 'react';
import Shopslide from '../components/shop/Shopslide';
import styled from 'styled-components';
import ShopCategory from '../components/shop/ShopCategory';

const ShopContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

function Shop(props) {
  return (
    <ShopContainer>
      <Shopslide />
      <ShopCategory />
    </ShopContainer>
  );
}

export default Shop;