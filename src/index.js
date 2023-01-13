import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';

// @ => src: webpack
// 问题：react脚手架隐藏了webpack
// 解决一：npm run eject(不推荐)
// 解决二：craco => create-react-app config

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
