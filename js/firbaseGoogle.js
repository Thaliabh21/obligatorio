// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBzxm9g5W8wawwflggaYTt-GZ2Du6y_HHE",
    authDomain: "autenticaciondesafio2jap.firebaseapp.com",
    projectId: "autenticaciondesafio2jap",
    storageBucket: "autenticaciondesafio2jap.appspot.com",
    messagingSenderId: "268527979511",
    appId: "1:268527979511:web:420fbfeb182ff099dbfcf2"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);