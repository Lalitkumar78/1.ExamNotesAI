
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-fccdf.firebaseapp.com",
  projectId: "authexamnotes-fccdf",
  storageBucket: "authexamnotes-fccdf.firebasestorage.app",
  messagingSenderId: "290253533681",
  appId: "1:290253533681:web:aed3a9bc12292995f69450"

 
  // apiKey: "AIzaSyDO0P2s5U_V2hp_Mt4-Qo9bQhRHvU770EQ",
  // authDomain: "authexamnotes.firebaseapp.com",
  // projectId: "authexamnotes",
  // storageBucket: "authexamnotes.firebasestorage.app",
  // messagingSenderId: "198091553006",
  // appId: "1:198091553006:web:cd719d4ee1ebf391139bff"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}