import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'react-app-polyfill/ie9'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './redux/modules'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
