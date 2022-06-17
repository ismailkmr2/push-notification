// // Give the service worker access to Firebase Messaging.
// // Note that you can only use Firebase Messaging here. Other Firebase libraries
// // are not available in the service worker.
// importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js')
// importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js')

// // // Initialize the Firebase app in the service worker by passing in
// // // your app's Firebase config object.
// // // https://firebase.google.com/docs/web/setup#config-object
// firebase.initializeApp({
//     apiKey: "AIzaSyBfrtRgjNgh1NRJHc7EBAcbAZMjK95QkPY",
//     authDomain: "gayan-elk-sync.firebaseapp.com",
//     databaseURL: "https://gayan-elk-sync.firebaseio.com",
//     projectId: "gayan-elk-sync",
//     storageBucket: "gayan-elk-sync.appspot.com",
//     messagingSenderId: "378168014581",
//     appId: "1:378168014581:web:c0a548ceda319b84ae37bc",
//     measurementId: "G-2WJB9XGEHZ"
// })

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.


// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js')

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyDRuJOz8dULeuACfEMVp9gXN5cYQTXk-jE",
    authDomain: "todo-afc51.firebaseapp.com",
    databaseURL: "https://todo-afc51-default-rtdb.firebaseio.com",
    projectId: "todo-afc51",
    storageBucket: "todo-afc51.appspot.com",
    messagingSenderId: "583396498193",
    appId: "1:583396498193:web:94ff31a3fe77016f364ab0",
    measurementId: "G-7ZBY5XJZSP"
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload)
    // Customize notification here
    const notificationTitle = 'Background Message Title'
    const notificationOptions = {
        body: 'Background Message body.',
    }

    self.registration.showNotification(notificationTitle,
        notificationOptions)
})
