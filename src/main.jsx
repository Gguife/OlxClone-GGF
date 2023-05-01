import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

//ROUTER
import {BrowserRouter} from 'react-router-dom'

//REDUX
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Reducers from './Reducers'
const store = createStore(Reducers)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
,)
