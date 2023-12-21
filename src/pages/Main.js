import React from 'react';
import Header from '../components/main/Header';
import { Outlet } from 'react-router';

function Main(props) {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Main;