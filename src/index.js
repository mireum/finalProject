import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import ScrollToTop from "./components/ScrollToTop";
import { getLoginUserInfo } from './features/userInfoSlice';
import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));

const loginUserInfo = async () => {
  const result = await axios.get(`http://localhost:8888/user/login`, {withCredentials: true});
  if (result.data.flag) store.dispatch(getLoginUserInfo(result.data.data));
  
}
loginUserInfo();

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
