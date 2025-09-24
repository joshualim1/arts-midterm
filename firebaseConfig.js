import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // <-- Add this

const firebaseConfig = {
  apiKey: "AIzaSyCt7-qYTZIJyfBM2Ao0V4kGFgl5VDJ4WGk",
  authDomain: "mobile-app---arts-fd76f.firebaseapp.com",
  projectId: "mobile-app---arts-fd76f",
  storageBucket: "mobile-app---arts-fd76f.firebasestorage.app",
  messagingSenderId: "553687976737",
  appId: "1:553687976737:web:dd625560e619b443e30c60",
  measurementId: "G-NSXWEMQ27J"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); // <-- Add this