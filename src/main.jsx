import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/publishWeb/sw.js', {
        scope: '/publishWeb/',
      });
      console.log('Service worker registered with scope:', registration.scope);
    } catch (error) {
      console.error('Service worker registration failed:', error);
    }
  }
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

registerServiceWorker();