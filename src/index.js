import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIhPoopFpaSNX0tZuiPIMQjTxdXI4YXDw",
  authDomain: "comic-store-simulator.firebaseapp.com",
  projectId: "comic-store-simulator",
  storageBucket: "comic-store-simulator.appspot.com",
  messagingSenderId: "680907097127",
  appId: "1:680907097127:web:b0f1ec6366668e2eb47a02",
  measurementId: "G-GYPP00SMKS"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />);