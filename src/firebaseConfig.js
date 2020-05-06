import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyBZt3lnm48pJMYnawYsnByeJkkmlnD18UE",
    authDomain: "tangle-demo.firebaseapp.com",
    databaseURL: "https://tangle-demo.firebaseio.com",
    projectId: "tangle-demo",
    storageBucket: "tangle-demo.appspot.com",
    messagingSenderId: "427444992546",
    appId: "1:427444992546:web:a4e6d6cb0c32a4bf9de87b",
    measurementId: "G-F9GK550YSJ"
};
firebase.initializeApp(config)

const db = firebase.firestore()
const auth = firebase.auth()
// const currentUser = auth.currentUser
const functions = firebase.functions();
const dashboardsCollection = db.collection('dashboards')

export {
    auth,
    db,
    firebase,
    functions,
    dashboardsCollection
}