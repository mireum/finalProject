import React from 'react';
import { StyledCategory } from '../../css/Shop';

function ShopCategory(props) {
  return (
    <StyledCategory>
      <li>
        <img className='cate-1 cate-st cursor-pointer'/>
        <p>맞춤상품</p>
      </li>
      <li>
        <img className='cate-2 cate-st cursor-pointer'/>
        <p>전체상품</p>
      </li>
      <li>
        <img className='cate-3 cate-st cursor-pointer'/>
        <p>사료</p>
      </li>
      <li>
        <img className='cate-4 cate-st cursor-pointer'/>
        <p>간식/영양제</p>
      </li>
      <li>
        <img className='cate-5 cate-st cursor-pointer'/>
        <p>산책/놀이</p>
      </li>
      <li>
        <img className='cate-6 cate-st cursor-pointer'/>
        <p>배변/위생</p>
      </li>
    </StyledCategory>
  );
}

export default ShopCategory;