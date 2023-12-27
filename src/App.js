import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
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
import Toktok from './components/community/toktok/Toktok';
import ToktokDetail from './components/community/toktok/ToktokDetail';
import CommunityInsert from './components/community/communityGlobal/CommunityInsert';
import Fleamarket from './components/community/fleamarket/Fleamarket';
import FleamarketDetail from './components/community/fleamarket/FleamarketDetail';
import DailyDog from './components/community/dailyDog/DailyDog';
import DailyDogWrite from './components/community/dailyDog/DailyDogWrite';
import DailyDogDetail from './components/community/dailyDog/DailyDogDetail';
import KakaoMap from './components/KakaoMap';

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
          <Route path='/community/Toktok' element={<Toktok />} />   {/* toktok 메인화면 */}
          <Route path='/community/Toktok/:postId' element={<ToktokDetail />} />   {/* todtod 디테일 */}
          <Route path='/community/fleamarket' element={<Fleamarket />} />
          <Route path='/community/fleamarket/:id' element={<FleamarketDetail />} />
          <Route path='/community/dailyDog' element={<DailyDog />} />
          <Route path='/community/dailyDog/:id' element={<DailyDogDetail />} />
          <Route path='/community/dailyDog/write' element={<DailyDogWrite />} />
          <Route path='/community/Toktok/:author' element={<ToktokDetail />} />   {/* todtod 디테일 */}
          <Route path='/map' element={<KakaoMap />} />   {/* 맵테스트 */}
          <Route path='/map/:search' element={<KakaoMap />} />   {/* 맵 쿼리테스트 */}
          <Route path='/community/Insert/:insertPage' element={<CommunityInsert />} />    {/* 커뮤니티 글등록 페이지 */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
