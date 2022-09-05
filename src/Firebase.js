import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyBJ0HcZt5LLYk2ApdHBP-4Ivzt6DcFRyt4",
    authDomain: "registration-bc764.firebaseapp.com",
    projectId: "registration-bc764",
    storageBucket: "registration-bc764.appspot.com",
    messagingSenderId: "733796749011",
    appId: "1:733796749011:web:29f29fb71f820921a3ce26",
    measurementId: "G-FPR68JW5DF"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();


