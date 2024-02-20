//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyCI_JpVxLpvPhq4uTVcI7r6rFucW9WA4Ns",
    authDomain: "comp1800-202410-demo-5ec7b.firebaseapp.com",
    projectId: "comp1800-202410-demo-5ec7b",
    storageBucket: "comp1800-202410-demo-5ec7b.appspot.com",
    messagingSenderId: "631656591527",
    appId: "1:631656591527:web:07975979e147af5464eb82"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
