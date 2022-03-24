import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDDipsLWgQ-oXxVfONztwFghkf5VQB4wto",
  authDomain: "biblioteca-digital-78c82.firebaseapp.com",
  databaseURL: "https://biblioteca-digital-78c82-default-rtdb.firebaseio.com",
  projectId: "biblioteca-digital-78c82",
  storageBucket: "biblioteca-digital-78c82.appspot.com",
  messagingSenderId: "1022398529827",
  appId: "1:1022398529827:web:c3ff3b719d47003de3cc96"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
