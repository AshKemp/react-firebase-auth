import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGCaWFSNUgnFBTAzJmSC_iRx6sst3fdjc",
  authDomain: "react-firebase-auth-2024-a1ac8.firebaseapp.com",
  projectId: "react-firebase-auth-2024-a1ac8",
  storageBucket: "react-firebase-auth-2024-a1ac8.appspot.com",
  messagingSenderId: "347821488581",
  appId: "1:347821488581:web:db938f973e1f76871473ac",
  measurementId: "G-5FRECQRVBB",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
