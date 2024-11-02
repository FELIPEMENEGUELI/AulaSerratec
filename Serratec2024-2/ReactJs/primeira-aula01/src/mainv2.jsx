import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Routers } from './routesv2'
import { ProviderProps } from './hooks/useProps'
import './GlobalStyle.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProviderProps>
      <RouterProvider router={Routers} />
    </ProviderProps>
  </StrictMode>,
)
