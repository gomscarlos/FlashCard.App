import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBn98kQRPKxGwtoVGzWPI7xr8DusaSKkTs",
    authDomain: "mindbooster-e847a.firebaseapp.com",
    projectId: "mindbooster-e847a",
    storageBucket: "mindbooster-e847a.appspot.com",
    messagingSenderId: "522966488327",
    appId: "1:522966488327:web:09dde98e2da67f51e0e1a2",
    measurementId: "G-ESXBRGVZE9"
  };
  
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;