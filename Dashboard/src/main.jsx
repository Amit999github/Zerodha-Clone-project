import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import 'react-toastify'
import { CookiesProvider } from 'react-cookie'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CookiesProvider>
    <App />
  </CookiesProvider>
  </BrowserRouter>,
)
