import React from 'react';
import { useNavigate } from 'react-router';

function Header(props) {
  const navigate = useNavigate();

  return (
    <>
      <a className='cursor-pointer'>커뮤니티</a> 
      <a className='cursor-pointer' onClick={() => navigate('/shop')}>쇼핑</a>
      <hr></hr>
    </>
  );
}

export default Header;