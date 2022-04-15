// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLlugb9RKkNMCmrAwjBhxFSdxkf516vx8",
  authDomain: "genius-car-services-1f464.firebaseapp.com",
  projectId: "genius-car-services-1f464",
  storageBucket: "genius-car-services-1f464.appspot.com",
  messagingSenderId: "687884283106",
  appId: "1:687884283106:web:0f8fb6d403a8f3fcca82bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
