import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDRuJOz8dULeuACfEMVp9gXN5cYQTXk-jE",
  authDomain: "todo-afc51.firebaseapp.com",
  databaseURL: "https://todo-afc51-default-rtdb.firebaseio.com",
  projectId: "todo-afc51",
  storageBucket: "todo-afc51.appspot.com",
  messagingSenderId: "583396498193",
  appId: "1:583396498193:web:94ff31a3fe77016f364ab0",
  measurementId: "G-7ZBY5XJZSP"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase 
