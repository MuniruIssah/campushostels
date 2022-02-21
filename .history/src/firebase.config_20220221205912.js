import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB4vPR-Q-WV82PEnnO3BQXOJDbG-ij07YY",
  authDomain: "campus-hostels.firebaseapp.com",
  projectId: "campus-hostels",
  storageBucket: "campus-hostels.appspot.com",
  messagingSenderId: "1060283354375",
  appId: "1:1060283354375:web:4d51655af15a73071849a2",
};

export const app = initializeApp(firebaseConfig);