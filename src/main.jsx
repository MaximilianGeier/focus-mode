import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/palette.pcss'
import './styles/reset.pcss'
import './styles/global.pcss'
import { Provider } from 'react-redux'
import store from './slice/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App class="app" />
    </Provider>
  </React.StrictMode>,
)
