import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routers } from './routers/Routers.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </StrictMode>,
)
