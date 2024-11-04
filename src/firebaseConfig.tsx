import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBEUlQFSJNg1PuBe_z5flbnMw-y7ZwdTUg",
  authDomain: "ankitsauthg.firebaseapp.com",
  projectId: "ankitsauthg",
  storageBucket: "ankitsauthg.appspot.com",
  messagingSenderId: "1083737306028",
  appId: "1:1083737306028:web:7b59cf3dc0a6a805e44009"
};
console.log("Firebase initialized");


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
