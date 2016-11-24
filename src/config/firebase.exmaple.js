const firebase = require('firebase');

export function firebaseInit() {
  const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
    messagingSenderId: ""
  };

  return firebase.initializeApp(config);
}
