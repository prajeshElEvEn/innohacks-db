// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBlJSki1LhkzIU8oD52f1HkoqPWVDzcCuo",
    authDomain: "covizone-9c238.firebaseapp.com",
    databaseURL: "https://covizone-9c238-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "covizone-9c238",
    storageBucket: "covizone-9c238.appspot.com",
    messagingSenderId: "469080536924",
    appId: "1:469080536924:web:6a2818b6fa80558e4a7399",
    measurementId: "G-TG200JV1YW"
}
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db