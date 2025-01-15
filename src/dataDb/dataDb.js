// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjyxdua0Ge3O9Ddl-sgQFkNmz_VlsdfX8",
  authDomain: "malekfaracars-ad40e.firebaseapp.com",
  projectId: "malekfaracars-ad40e",
  storageBucket: "malekfaracars-ad40e.firebasestorage.app",
  messagingSenderId: "72852260806",
  appId: "1:72852260806:web:a306c5b7de79527d9c14c7"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db;