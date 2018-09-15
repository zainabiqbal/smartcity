
//import * as admin from 'firebase-admin';
import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyAMbWkP0yXvotJ8KdXuhFUj4XYNnB2BLpY",
    authDomain: "smartcity-2107c.firebaseapp.com",
    databaseURL: "https://smartcity-2107c.firebaseio.com",
    projectId: "smartcity-2107c",
    storageBucket: "smartcity-2107c.appspot.com",
    messagingSenderId: "219914402739"
  };
  const fire= firebase.initializeApp(config);
 

 

  export default fire;
