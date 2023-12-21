import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
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
  
  .mg {
    margin: 10px;
  }

  .mt {
    margin-top: 60px;
  }

  .mb {
    margin-bottom: 40px;
  }

  .ml {
    margin-left: 40px;
  }

  .mr {
    margin-right: 40px;
  }

  .btn {
    display: block;
    padding: 5px 10px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    /* box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.25); */
    background: #6087fc;
  }
`;