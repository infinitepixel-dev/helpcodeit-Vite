import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
//ANCHOR Import AuthProvider for Login and Logout
import AuthProvider from '@components/Product_Management/sub_components/contexts/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <HelmetProvider>
        <AuthProvider>
            <BrowserRouter>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </BrowserRouter>
        </AuthProvider>
    </HelmetProvider>
)
