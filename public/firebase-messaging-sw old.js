importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js')

// firebase.initializeApp({
//   apiKey: 'AIzaSyDFh7vqPeYpn910SH57WeofWnMXDc8WJGE',
//   authDomain: 'fir-cloud-messaging-5543f.firebaseapp.com',
//   databaseURL: 'https://fir-cloud-messaging-5543f.firebaseio.com',
//   projectId: 'fir-cloud-messaging-5543f',
//   storageBucket: 'fir-cloud-messaging-5543f.appspot.com',
//   messagingSenderId: '354347614212',
//   appId: '1:354347614212:web:7b474a30c18aa6d2b47551',
//   measurementId: 'G-L63HMWWX6W'
// })

firebase.initializeApp({
  apiKey: "AIzaSyCN4t1nSfY03D0vwE14R5pd0D-hhAzjHh0",
  authDomain: "cvslk-compro.firebaseapp.com",
  projectId: "cvslk-compro",
  storageBucket: "cvslk-compro.appspot.com",
  messagingSenderId: "905506852813",
  appId: "1:905506852813:web:0f30af51cd668730cdbe84",
  measurementId: "G-39RM9VQG0D"
})

const messaging = firebase.messaging()

// Both of them ain't working

//background notifications will be received here
// messaging.setBackgroundMessageHandler(function (payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload)
//   // Customize notification here
//   const notificationTitle = 'Background Message Title'
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   }
//   return self.registration.showNotification(notificationTitle, notificationOptions)
// })

messaging.setBackgroundMessageHandler((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.'
    // icon: '/firebase-logo.png'
  };
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

// messaging.onBackgroundMessage(function (payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload)
//   const notificationTitle = 'Background Message Title'
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   }

//   return self.registration.showNotification(notificationTitle, notificationOptions)
// })
