import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Shop from './pages/Shop';
import Community from './pages/Community';
import ShopDetail from './components/shop/ShopDetail';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Question from './components/shop/Question';
import Cart from './components/shop/Cart';
import Toktok from './components/community/toktok/Toktok';
import ToktokDetail from './components/community/toktok/ToktokDetail';
import CommunityInsert from './components/community/communityGlobal/CommunityInsert';
import Fleamarket from './components/community/fleamarket/Fleamarket';
import FleamarketDetail from './components/community/fleamarket/FleamarketDetail';
import DailyDog from './components/community/dailyDog/DailyDog';
import DailyDogWrite from './components/community/dailyDog/DailyDogWrite';
import DailyDogDetail from './components/community/dailyDog/DailyDogDetail';
import KakaoMap from './components/KakaoMap';
import Login from './components/user/Login';
import Signup from './components/user/Signup';
import FleamarketWrite from './components/community/fleamarket/FleamarketWrite';
import Mypage from './components/main/Mypage';

import PersonalDog from './components/personalDog/PersonalDog';
import Chatting from './components/main/Chatting';
import RequireAuth from './auth/RequireAuth';

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
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Main />} >
          <Route path='/personaldog' element={<PersonalDog />} />
          <Route path='/' element={<Community />} />
          <Route path='/mypage' element={<Mypage />}/>
          <Route path='/community/Toktok' element={<Toktok />} />
          <Route path='/shop/:nextId?' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/shop/detail/:postId' element={<ShopDetail />} />
          {/* <Route path='/shop/detail/:productId?/quest' element={<Question />} /> */}
          <Route path='/shop/detail/quest' element={<Question />} />
          <Route path='/community/Toktok' element={<Toktok />} />   {/* toktok 메인화면 */}
          <Route path='/community/Toktok/:_id' element={<ToktokDetail />} />   {/* todtod 디테일 */}
          <Route path='/community/fleamarket' element={<Fleamarket />} />
          <Route path='/community/fleamarket/:id' element={<FleamarketDetail />} />
          <Route 
            path='/community/fleamarket/write' 
            element={
              <RequireAuth>
                <FleamarketWrite />
              </RequireAuth>
            } 
          />
          <Route path='/community/dailydog' element={<DailyDog />} />
          <Route path='/community/dailydog/detail/:id' element={<DailyDogDetail />} />
          <Route 
            path='/community/dailydog/write' 
            element={
              <RequireAuth>
                <DailyDogWrite />
              </RequireAuth>
            } 
          />
          <Route path='/map' element={<KakaoMap />} />   {/* 맵테스트 */}
          <Route path='/map/:search' element={<KakaoMap />} />   {/* 맵 쿼리테스트 */}
          <Route path='/community/Insert/:insertPage' element={<CommunityInsert />} />    {/* 커뮤니티 글등록 페이지 */}
          <Route path='/user/chatting' element={<Chatting />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
