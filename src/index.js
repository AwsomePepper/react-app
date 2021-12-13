import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  //<React.StrictMode> //이런게 있으면 경고가 두번씩 되는 버그가 발생하기도함
  //빌드 하기전엔 꼭 지워주기~
    <App />,
  //</React.StrictMode>
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
