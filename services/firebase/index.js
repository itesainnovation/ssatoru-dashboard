// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCyMiRBaEiHB5M33rY3yUqFGO8R8bJHH0",
  authDomain: "ssatoru-token.firebaseapp.com",
  projectId: "ssatoru-token",
  storageBucket: "ssatoru-token.appspot.com",
  messagingSenderId: "839588004508",
  appId: "1:839588004508:web:c2556835e3eb9111762359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);