import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routers } from './routes/index.jsx'
import './GlobalStyle.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routers />
  </StrictMode>,
)
