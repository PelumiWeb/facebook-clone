import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyArrwHI-1ayLp7H-MJK6EzNTLRTBAExLPU",
    authDomain: "facebook-clone-90240.firebaseapp.com",
    projectId: "facebook-clone-90240",
    storageBucket: "facebook-clone-90240.appspot.com",
    messagingSenderId: "581938612233",
    appId: "1:581938612233:web:9a1e19bc16abfc5f3590d8",
    measurementId: "G-35HTMZDFSG"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig)
  const db = firebaseapp.firestore()
  const auth = firebase.auth()
  const provider = new  firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()

  export {db, auth, provider, storage}