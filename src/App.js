import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Shop from './pages/Shop';
import Community from './pages/Community';
import ItemList from './components/ItemList';
import Toktok from './components/commnunity/Toktok';
import ShopDetail from './components/shop/ShopDetail';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

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
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/detail' element={<ShopDetail/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
