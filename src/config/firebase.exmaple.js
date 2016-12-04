const firebase = require('firebase');

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""
};

export default firebase.initializeApp(config);
