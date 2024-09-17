import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const App = () => {
  return <h1>Formotex</h1>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
