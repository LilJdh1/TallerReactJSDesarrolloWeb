// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVJv39GYySh_31jgYY6q4k4sMwdRZDyS0",
  authDomain: "listadefavoritos-6a6fd.firebaseapp.com",
  projectId: "listadefavoritos-6a6fd",
  storageBucket: "listadefavoritos-6a6fd.firebasestorage.app",
  messagingSenderId: "662398076067",
  appId: "1:662398076067:web:c07e8ef6f387fe34cbab16"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;