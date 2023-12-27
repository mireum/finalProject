import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Shop from './pages/Shop';
import Community from './pages/Community';
import ItemList from './components/shop/ItemList';
import Toktok from './components/commnunity/Toktok';
import ShopDetail from './components/shop/ShopDetail';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Question from './components/shop/Question';
import Cart from './components/shop/Cart';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    box-sizing:  border-box;
    margin: 0 auto;
  }

  * {
    box-sizing: inherit;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />} >
          <Route path='/' element={<Community />} />
          <Route path='/community/Toktok' element={<Toktok />} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/cart' element={<Cart/>} />
          {/* 나중에 ? 지우기 */}
          <Route path='/shop/detail/:productId?' element={<ShopDetail/>}/>
          {/* <Route path='/shop/detail/:productId?/quest' element={<Question />} /> */}
          <Route path='/shop/detail/quest' element={<Question />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
