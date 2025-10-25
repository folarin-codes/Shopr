import { initializeApp } from 'firebase/app';
// Import the services you need
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyAIyhgCz0vG5vEnNdd0IqElvIkxMSV27AQ",
  authDomain: "shopr-fadbd.firebaseapp.com",
  projectId: "shopr-fadbd",
  storageBucket: "shopr-fadbd.firebasestorage.app",
  messagingSenderId: "290294737375",
  appId: "1:290294737375:web:d768a875abeaf8ae4a3c6a",
  measurementId: "G-0B0B8QG0MJ"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);