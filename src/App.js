import './App.css';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './css/global';
import Main from './pages/Main';
import Community from './pages/Community';
import ItemList from './components/ItemList';


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
