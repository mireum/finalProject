import React from 'react';
import Shopslide from '../components/shop/Shopslide';
import styled from 'styled-components';
import { ShopContainer } from "../css/Shop";


function Shop(props) {
  return (
    <ShopContainer>
      <Shopslide />
    </ShopContainer>
  );
}

export default Shop;