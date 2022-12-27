import React, { memo } from "react";
//使用路由
import { useRoutes } from "react-router-dom";
import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";
import routes from './router'

export default memo(function App() {
  return (
    <div>
      <AppHeader></AppHeader>
      <div className="content">
        {useRoutes(routes)}
      </div>
      <AppFooter></AppFooter>
    </div>
  );
});
