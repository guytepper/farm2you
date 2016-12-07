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
  },
  // Returns a promise with the value of the current user admin rule (true/false)
  isAdmin() {
    return new Promise((resolve, reject) => {
      this.authStateListener(auth => {
        const isAdminRef = firebase.database().ref(`users/${auth.uid}/isAdmin`);
        isAdminRef.once('value')
          .then(snap => resolve(snap.val()))
          .catch(err => reject(err));
      })
    })

  }
}
