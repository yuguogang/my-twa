import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import './index.css'
// this manifest is used temporarily for development purposes
// const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json';
const manifestUrl = 'https://raw.githubusercontent.com/yuguogang/my-twa/main/public/tonconnect-manifest.json';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
ReactDOM.createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>
)

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <TonConnectUIProvider manifestUrl={manifestUrl}>
//     <App />
//   </TonConnectUIProvider>,
// )
