import firebase from '../config/firebase';
import firebaseLib from 'firebase';

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
  facebookLogin() {
    const provider = new firebaseLib.auth.FacebookAuthProvider();
    auth.signInWithRedirect(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
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
}
