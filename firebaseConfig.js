import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // <-- Add this

const firebaseConfig = {
  apiKey: "AIzaSyDow-HgWPikI1RQLD0qXoLHGxc-mkuQ7mw",
  authDomain: "mobile-app-schedminder.firebaseapp.com",
  projectId: "mobile-app-schedminder",
  storageBucket: "mobile-app-schedminder.firebasestorage.app",
  messagingSenderId: "308960709086",
  appId: "1:308960709086:web:1baf123b1cac2aa5ecf54f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); // <-- Add this