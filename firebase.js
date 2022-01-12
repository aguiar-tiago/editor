import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    //hidden for security
  };

  const db = (
    firebase.apps[0] ?? firebase.initializeApp(firebaseConfig)
  ).firestore()
  

  export {db}