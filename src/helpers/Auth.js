import firebase from '../config/firebase';
import firebaseLib from 'firebase';

const auth = firebase.auth();

export default {
  signOut() {
    auth.signOut();
  },
  authStateListener(cb) {
    auth.onAuthStateChanged(cb)
  },
  facebookLogin() {
    const provider = new firebaseLib.auth.FacebookAuthProvider();
    return new Promise((resolve, reject) => {
      auth.signInWithPopup(provider).then(function(result) {
        resolve(result.user);
      }).catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(`${errorCode}: ${errorMessage}`);
      });
    })
  },
  // Returns a promise with the value of the current user admin rule (true/false)
  isAdmin() {
    return new Promise((resolve, reject) => {
      this.authStateListener(auth => {
        if (auth && auth.uid) {
          const isAdminRef = firebase.database().ref(`users/${auth.uid}/isAdmin`);
          isAdminRef.once('value')
            .then(snap => resolve(snap.val()))
            .catch(err => reject(err));
        }
        else return resolve(false);
      });
    })
  }
  isNewUser() {
    // if user not exists in users database -> new user
  }
}
