import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import {Provider} from 'react-redux'  //해당 애플리케이션 Store 객체를 사용 하도록 설정하는 역할

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
