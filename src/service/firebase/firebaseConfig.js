// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6JIeVDmV0qxvBk_JMNYag576vYTZ6AoU",
  authDomain: "espacioseryhacer.firebaseapp.com",
  projectId: "espacioseryhacer",
  storageBucket: "espacioseryhacer.appspot.com",
  messagingSenderId: "370249092129",
  appId: "1:370249092129:web:6c959831acbdafb46e6760"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)