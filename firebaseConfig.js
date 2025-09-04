// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDow-HgWPikI1RQLD0qXoLHGxc-mkuQ7mw",
  authDomain: "mobile-app-schedminder.firebaseapp.com",
  projectId: "mobile-app-schedminder",
  storageBucket: "mobile-app-schedminder.firebasestorage.app",
  messagingSenderId: "308960709086",
  appId: "1:308960709086:web:1baf123b1cac2aa5ecf54f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);