import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'src/style/universal.scss';
import 'src/style/app.scss';
import App from 'src/App'

createRoot(document.getElementById("weatherapp")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
