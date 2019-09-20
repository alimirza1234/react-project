import firebase from  'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var config = {
    apiKey: "AIzaSyC9q3UDf7IauT8OLx1e_qLmmrKXfGmaj_E",
    authDomain: "net-ninja-marioplan-1771d.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-1771d.firebaseio.com",
    projectId: "net-ninja-marioplan-1771d",
    storageBucket: "",
    messagingSenderId: "91283814691",
    appId: "1:91283814691:web:7ffe9d155941515919f496"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;