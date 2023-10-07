import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyChVNSMiYxCkbGd9C95aChr9GxRJtW6NRA",
    authDomain: "precious-plastics-v4-dev.firebaseapp.com",
    databaseURL: "https://precious-plastics-v4-dev.firebaseio.com",
    projectId: "precious-plastics-v4-dev",
    storageBucket: "precious-plastics-v4-dev.appspot.com",
    messagingSenderId: "174193431763",
    appId: "1:174193431763:web:ae25dcd14812ff57b77026"
};

export const app = initializeApp(firebaseConfig);
