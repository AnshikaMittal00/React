import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBnp_GZQBlwyKR80gOdrcdqrVPvByu4Gs",
  authDomain: "biterun-873be.firebaseapp.com",
  projectId: "biterun-873be",
  storageBucket: "biterun-873be.firebasestorage.app",
  messagingSenderId: "641948850638",
  appId: "1:641948850638:web:46a6e0856b5ce59f19739f",
  measurementId: "G-2FQWWPQV12"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
