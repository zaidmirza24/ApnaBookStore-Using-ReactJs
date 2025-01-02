import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './Components/context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
      <div className='dark:bg-slate-900 dark:text-white'>
        <App />
      </div>
      </AuthProvider>
    </BrowserRouter>

  </StrictMode>,
)
