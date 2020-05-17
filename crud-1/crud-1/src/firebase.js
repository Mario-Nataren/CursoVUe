import firebase from 'firebase/app'
import 'firebase/firestore'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCdfC0rNdLXhZvOq69-xjpJoOeXg2_Mwhs",
    authDomain: "bd-01-cc196.firebaseapp.com",
    databaseURL: "https://bd-01-cc196.firebaseio.com",
    projectId: "bd-01-cc196",
    storageBucket: "bd-01-cc196.appspot.com",
    messagingSenderId: "317824663777",
    appId: "1:317824663777:web:90aa804efb95fbb460b7a0"
  };

  firebase.initializeApp(firebaseConfig);

  const db= firebase.firestore()

  export {db}
