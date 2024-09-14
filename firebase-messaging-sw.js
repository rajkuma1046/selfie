importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js');

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyqLW6K7aMZudaGHRvxrceQDaANQE4c4Q",
  authDomain: "local-to-firebass.firebaseapp.com",
  databaseURL: "https://local-to-firebass-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "local-to-firebass",
  storageBucket: "local-to-firebass.appspot.com",
  messagingSenderId: "121890064671",
  appId: "1:121890064671:web:9143764a66282571c1c82a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
    console.log('Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
