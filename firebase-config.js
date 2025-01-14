// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1GWU01Z33Cmdd9IE05B_ITGlTxK44gig",
  authDomain: "appvedruna.firebaseapp.com",
  projectId: "appvedruna",
  storageBucket: "appvedruna.firebasestorage.app",
  messagingSenderId: "206304936523",
  appId: "1:206304936523:web:d03eb7ed67f8cce4dd03ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);