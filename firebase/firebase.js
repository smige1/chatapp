// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAlBsbTcdW4_3KrPoVxr3D7ii_0tOhod9c",
  authDomain: "chatapp-92370.firebaseapp.com",
  projectId: "chatapp-92370",
  storageBucket: "chatapp-92370.appspot.com",
  messagingSenderId: "535401299189",
  appId: "1:535401299189:web:d7edf366c8fb57a01d59bc",
  measurementId: "G-PL3QHPGQ6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);


