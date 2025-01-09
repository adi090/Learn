import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { appStore } from './app/store'
import { Toaster } from 'sonner'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
    <App />
    <Toaster/>
    </Provider>
  </StrictMode>,
)
