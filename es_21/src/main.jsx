import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UseF }   from './UseF.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseF />
  </StrictMode>,
)
