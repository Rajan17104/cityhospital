// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGhCxlkRdrU2Jy-0u9-TSkBpypxhLNNfw",
  authDomain: "cityhospital-217a1.firebaseapp.com",
  projectId: "cityhospital-217a1",
  storageBucket: "cityhospital-217a1.appspot.com",
  messagingSenderId: "293907216326",
  appId: "1:293907216326:web:60e0ee6ecc27190f8764c7",
  measurementId: "G-VGRQ27GZ18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);