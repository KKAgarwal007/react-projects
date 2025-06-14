import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './Context/UserContext.jsx'
import Home from './pages/Home.jsx'
import {Provider} from 'react-redux'
import { store } from './redux/store.js'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>

  <UserContext Children={ <App/>}>
   
  </UserContext>
  </Provider>

  
)
