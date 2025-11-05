import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routers } from './routers/Routers.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Routers />
  </StrictMode>,
)
