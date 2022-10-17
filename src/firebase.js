import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoR6E07108B5YdyHPoah3Vvpe9YsSxzLM",
  authDomain: "netflix-clone-15998.firebaseapp.com",
  projectId: "netflix-clone-15998",
  storageBucket: "netflix-clone-15998.appspot.com",
  messagingSenderId: "370772129318",
  appId: "1:370772129318:web:2d316d4be59faefca058e7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
