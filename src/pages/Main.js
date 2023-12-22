import React from 'react';
import Header from '../components/main/Header';
import { Outlet } from 'react-router';
import Footer from '../components/main/Footer';

function Main(props) {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Main;