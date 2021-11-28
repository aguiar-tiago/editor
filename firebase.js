import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDahpiK4flG8S92gHmQ7GR7krtc0Gj9zvI",
    authDomain: "monalisa-editor.firebaseapp.com",
    projectId: "monalisa-editor",
    storageBucket: "monalisa-editor.appspot.com",
    messagingSenderId: "970294489180",
    appId: "1:970294489180:web:28741f23eb36068b12b699"
  };

  const db = (
    firebase.apps[0] ?? firebase.initializeApp(firebaseConfig)
  ).firestore()
  

  export {db}