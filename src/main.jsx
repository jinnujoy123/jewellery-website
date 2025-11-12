import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ProductProvider } from "./context/ProductContext";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='1037039464339-2q8lhmlum9r6e8df9jp40l1otk16k2rf.apps.googleusercontent.com'>
      <ProductProvider>  <App /></ProductProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
