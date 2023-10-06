import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC3UhXtDKzEHSlKPu6Y3q2brULA53nyyGE",
  authDomain: "ecommerce-react-35b32.firebaseapp.com",
  projectId: "ecommerce-react-35b32",
  storageBucket: "ecommerce-react-35b32.appspot.com",
  messagingSenderId: "102237796536",
  appId: "1:102237796536:web:42d7aebfae6046c0659c4d"
};
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
