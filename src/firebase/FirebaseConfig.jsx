// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApIG0yUWMBHW7lFQKjdYQ8hYxTmZ_Qt2Y",
    authDomain: "suparco-ee892.firebaseapp.com",
    projectId: "suparco-ee892",
    storageBucket: "suparco-ee892.appspot.com",
    messagingSenderId: "429216666723",
    appId: "1:429216666723:web:967ceff2c788cf254d9456",
    measurementId: "G-P5F334SY33"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Initialize Firestore
const fireDB = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firebase Storage
const storage = getStorage(app);

export { fireDB, auth, analytics, logEvent, storage };
