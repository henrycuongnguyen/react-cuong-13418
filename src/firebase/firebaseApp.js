import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA0r5dhRkSufMW213mYm67jaTEq_cgbXs0",
    authDomain: "fir-rn-a486c.firebaseapp.com",
    databaseURL: "https://fir-rn-a486c.firebaseio.com",
    projectId: "fir-rn-a486c",
    storageBucket: "fir-rn-a486c.appspot.com",
    messagingSenderId: "1028838209456"
  };
const firebaseApp =  firebase.initializeApp(config);
export default firebaseApp;