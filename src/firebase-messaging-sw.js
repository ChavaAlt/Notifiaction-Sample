importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyCDiw83vYjEdrIF-d13um9Pql_ip2b5KlM",
    authDomain: "onlinefirebase-7f07a.firebaseapp.com",
    databaseURL: "https://onlinefirebase-7f07a.firebaseio.com",
    projectId: "onlinefirebase-7f07a",
    storageBucket: "onlinefirebase-7f07a.appspot.com",
    messagingSenderId: "406859070673",
    appId: "1:406859070673:web:bcdc44bf43a9d50b0f99f0",
    measurementId: "G-PCEPMNGGTC"

});

const messaging = firebase.messaging();