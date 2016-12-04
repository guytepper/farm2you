import firebase from '../config/firebase';

const auth = firebase.auth();

export default {
  signIn(email, password) {
    auth.signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(`${errorCode}: ${errorMessage}`);
    })
  },
  signOut() {
    auth.signOut();
  },
  authStateListener(cb) {
    auth.onAuthStateChanged(cb)
  }
}
