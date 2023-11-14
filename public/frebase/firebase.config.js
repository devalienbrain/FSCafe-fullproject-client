// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY14lk6GAbnvNyA3GQkiH2x0ck_RLf-uY",
  authDomain: "fscafe-fullstack-project.firebaseapp.com",
  projectId: "fscafe-fullstack-project",
  storageBucket: "fscafe-fullstack-project.appspot.com",
  messagingSenderId: "15160498173",
  appId: "1:15160498173:web:abfced1f3fab9aa1222b94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
