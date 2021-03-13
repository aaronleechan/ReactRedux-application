import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import  {createStore,applyMiddleware} from 'redux';
import {BrowserRouter as Router} from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import appReducer from './store/root-reducer';
import rootSaga from './store/root-saga';
import App from './component/App';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  appReducer,
  applyMiddleware(sagaMiddleware)
)

ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <App/>
    </Router>
  </Provider>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
