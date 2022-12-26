import React, { memo } from "react";
//使用路由
import { useRoutes } from "react-router-dom";
import routes from './router'

export default memo(function App() {
  return (
    <div>
      <div className="header"></div>
      <div className="content">
        {useRoutes(routes)}
      </div>
      <div className="footer"></div>
    </div>
  );
});
