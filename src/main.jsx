import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import process from 'process';
import { Buffer } from 'buffer';
window.process = process;
window.Buffer = Buffer;

ReactDOM.createRoot(document.getElementById('root')).render(
    <HelmetProvider>

        <BrowserRouter>
            {/* <React.StrictMode> */}
            <App />
            {/* </React.StrictMode> */}
        </BrowserRouter>

    </HelmetProvider>
)
