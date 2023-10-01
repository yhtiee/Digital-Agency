// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAoKC1--6iM-jTnPIe7hPRuIY2fPSsyWHM",
  authDomain: "digital-wakaa.firebaseapp.com",
  projectId: "digital-wakaa",
  storageBucket: "digital-wakaa.appspot.com",
  messagingSenderId: "808501106293",
  appId: "1:808501106293:web:524519ed5a05ef7af54a3c",
  measurementId: "G-NEDZJZGKBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);