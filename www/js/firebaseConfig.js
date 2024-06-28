// firebaseConfig.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBs5gx-e9cMS3_2kfYbLn8O8BacHpWIFqg",
    authDomain: "booking-4157b.firebaseapp.com",
    databaseURL: "https://booking-4157b-default-rtdb.firebaseio.com",
    projectId: "booking-4157b",
    storageBucket: "booking-4157b.appspot.com",
    messagingSenderId: "1095596490076",
    appId: "1:1095596490076:web:7856a4fecf2a55b3ff5599"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
