import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBU-A4igdqS61iOzO-WG_hFeaCPrAf4jNs",
    authDomain: "facebook-messenger-clone-f61f0.firebaseapp.com",
    projectId: "facebook-messenger-clone-f61f0",
    storageBucket: "facebook-messenger-clone-f61f0.appspot.com",
    messagingSenderId: "482810213334",
    appId: "1:482810213334:web:acfa5102bdfc54449a6a77"

  });

  const db = firebase.firestore();

  export default db;