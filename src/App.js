import './App.css';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './css/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={}/>
      </Routes>
    </>
  );
}

export default App;
