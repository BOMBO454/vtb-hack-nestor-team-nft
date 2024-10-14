import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {AppRoot} from "@telegram-apps/telegram-ui";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoot>
      <App/>
    </AppRoot>
  </StrictMode>,
)
