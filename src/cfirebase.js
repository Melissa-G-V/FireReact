
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAL0j0Pvgwq3MGD6_1AnfKQaJe0DecO74c",
    authDomain: "sosanimais-7fff4.firebaseapp.com",
    projectId: "sosanimais-7fff4",
    storageBucket: "sosanimais-7fff4.appspot.com",
    messagingSenderId: "385639375646",
    appId: "1:385639375646:web:bd76528686e163b052df0f"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);