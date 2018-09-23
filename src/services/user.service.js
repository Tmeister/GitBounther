import firebase from '../utils/FirebaseConfig';

export default {
  login() {
    return new Promise((resolve, reject) => {
      const provider = new firebase.auth.GithubAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((user) => {
          resolve(user);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  logout() {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          resolve();
        })
        .catch((error) => {
          console.log('error on signout :', error);
          reject(error);
        });
    });
  },
  status() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log('onAuthStateChanged');
          console.log('user :', user);
          resolve(user);
        } else {
          reject(Error('No user logged in'));
        }
      });
    });
  },
};
