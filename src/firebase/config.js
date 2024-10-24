// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAx9mVBBuOEFjbvHb4-Hx-FacWSo72LQKM",
    authDomain: "viveros-el-botanico.firebaseapp.com",
    projectId: "viveros-el-botanico",
    storageBucket: "viveros-el-botanico.appspot.com",
    messagingSenderId: "990278895961",
    appId: "1:990278895961:web:4a5a7a83d6087da9f5a448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);