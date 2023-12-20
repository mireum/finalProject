import { createGlobalStyle } from 'styled-components';
import './App.css';
import { Routes } from 'react-router-dom';


const GlobalStyle = createGlobalStyle`
  body {
    box-sizing:  border-box;
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
        
      </Routes>
    </>
  );
}

export default App;
