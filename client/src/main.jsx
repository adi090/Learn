import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import Login from './pages/Login'
import { appStore } from './app/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
    <Login />
    </Provider>
  </StrictMode>,
)
