import firebase from "firebase/compat";

importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-messaging.js')

firebase.initializeApp({
  apiKey: "AIzaSyCxEnAQUoXqkRs470xRG16qQd2bO75ppFM",
  authDomain: "notification-933cf.firebaseapp.com",
  projectId: "notification-933cf",
  storageBucket: "notification-933cf.appspot.com",
  messagingSenderId: "977953857684",
  appId: "1:977953857684:web:659082a4c37af4c811d481",
  measurementId: "G-24Z3PDK51X"
})

const messaging = firebase.messaging();
