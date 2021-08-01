import firebase from "firebase";

// let firebaseConfig = {
//   apiKey: 'AIzaSyAiXO2Tf-PdAWv0VFLn5x1gytZW4Qw8RyY',
//   authDomain: 'iiitd-student-playbook.firebaseapp.com',
//   databaseURL: 'https://iiitd-student-playbook.firebaseio.com',
//   projectId: 'iiitd-student-playbook',
//   storageBucket: 'iiitd-student-playbook.appspot.com',
//   messagingSenderId: '557827916584',
//   appId: '1:557827916584:web:679950ab0a34089436461d',
//   measurementId: 'G-5BBSPSTEEE',
// };

let firebaseConfig = {
  apiKey: "AIzaSyA5K0-OfUBQhgNtjTbwC0SelN3ZeQuYMko",
  authDomain: "design-flywheel.firebaseapp.com",
  projectId: "design-flywheel",
  storageBucket: "design-flywheel.appspot.com",
  messagingSenderId: "513068976769",
  appId: "1:513068976769:web:2bc21aa7cff600dd8a5b80",
  measurementId: "G-VM6F37E11L",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider().setCustomParameters({
//   hd: "iiitd.ac.in",
// });
const provider = new firebase.auth.GoogleAuthProvider();
firebase.analytics();

firebase.firestore().settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED,
});

firebase
  .firestore()
  .enablePersistence()
  .catch(function (err) {
    if (err.code == "failed-precondition") {
    } else if (err.code == "unimplemented") {
    }
  });

export default fire;
export { auth, provider };
// export { auth };
