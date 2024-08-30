// lib/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PRIVATE_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PRIVATE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PRIVATE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PRIVATE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PRIVATE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PRIVATE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
