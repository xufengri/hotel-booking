import React,{ Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import './assets/css/index.less'
import 'normalize.css'
import store from '@/store'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    // {/* 异步组件，如果数据还没有加载成功的时候，显示loading字符串 */}
    <Suspense fallback="loading">
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>  
    </Suspense>
  // </React.StrictMode>
);
