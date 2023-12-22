import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Community from './pages/Community';
import ItemList from './components/ItemList';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    box-sizing:  border-box;
    /* max-width: 1200px;
    margin: 0 auto; */
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
          {/* 쇼핑 컴포넌트 넣어주세요! */}
          <Route path='/shop' element={<ItemList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
