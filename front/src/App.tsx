import '@telegram-apps/telegram-ui/dist/styles.css';
import './App.css'

import { Placeholder } from '@telegram-apps/telegram-ui';

function App() {

  return (
      <Placeholder
        header="Pavel Test App"
        description="Pavel Test description"
      >
        <img
          alt="Telegram sticker"
          src="https://xelene.me/telegram.gif"
          style={{ display: 'block', width: '144px', height: '144px' }}
        />
      </Placeholder>
  )
}

export default App
