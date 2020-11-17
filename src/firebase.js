// This import loads the firebase namespace along with all its type information.
import firebase from "firebase/app";

// These imports load individual services into the firebase namespace.

import "firebase/auth";
import "firebase/database";
import "firebase/storage";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyDs9oOwZamQjrcVaErG_S55bqSrai4Wwy4",
    authDomain: "onlineproductsellingapp.firebaseapp.com",
    databaseURL: "https://onlineproductsellingapp.firebaseio.com",
    projectId: "onlineproductsellingapp",
    storageBucket: "onlineproductsellingapp.appspot.com",
    messagingSenderId: "253823759001",
    appId: "1:253823759001:web:40bc0caa3900b16da77e08",
    measurementId: "G-STBH7K76E6"
};
  

firebase.initializeApp(config);


// Export the database, auth and firebase timestamp seperately for convenience
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export default firebase;
