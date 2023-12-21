import './App.css';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './css/global';
import Main from './pages/Main';
import Community from './pages/Community';
import Toktok from './components/commnunity/Toktok';
import ToktokDetail from './components/commnunity/ToktokDetail';
import CommunityInsert from './components/commnunity/CommunityInsert';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Main />} >
          <Route path='/' element={<Community />} />
          <Route path='/community/Toktok' element={<Toktok />} />   {/* toktok 메인화면 */}
          <Route path='/community/Toktok/:postId' element={<ToktokDetail />} />   {/* todtod 디테일 */}
          <Route path='/community/Insert/:insertPage' element={<CommunityInsert />} />    {/* 커뮤니티 글등록 페이지 */}
          {/* 쇼핑 컴포넌트 넣어주세요! */}
          {/* <Route path='/shop' element={< />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
