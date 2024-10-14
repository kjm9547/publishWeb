// import { initializeApp } from "../node_modules/firebase/app";
// import { getMessaging,onBackgroundMessage } from "../node_modules/firebase/messaging/sw";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
//             import {
//                 getMessaging,
//                 onMessage,
//                 getToken,
//             } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js";
// // Initialize the Firebase app in the service worker by passing in
// // your app's Firebase config object.
// // https://firebase.google.com/docs/web/setup#config-object
// const firebaseApp = initializeApp({
//     apiKey: "AIzaSyDmpFjQ8mKtzuFKZKRMhNJ29pDxx9jHlZk",
//     authDomain: "click-78a26.firebaseapp.com",
//     projectId: "click-78a26",
//     storageBucket: "click-78a26.appspot.com",
//     messagingSenderId: "500544009458",
//     appId: "1:500544009458:web:b6aab87169a0565e968c6b",
//     measurementId: "G-M9XBJ2PJBN"
// });

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// console.log("firebaseApp: ",firebaseApp)


// const messaging = getMessaging(firebaseApp);
// getToken(messaging, {vapidKey: "BKq2Q36zkLq2ZQnYs0MYwZXEiFjDG7ZeOjPWxe164Gv-SOTs-Pa9qs4bOhpUaW77KD4pdRbyonxPgimvShxAyac"}).then((token)=>{
//     console.log("recive token = ", token)
// })

// onBackgroundMessage(messaging, (payload) => {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//       body: 'Background Message body.',
//     };
  
//     self.registration.showNotification(notificationTitle,
//       notificationOptions);
//   });


self.addEventListener('push',(e)=>{
    console.log(e)
   const options = {
      body: e.data.json().notification.body,
      
    }
    self.registration.showNotification('firebase 타이틀입니다.',options);
})
self.addEventListener('install',()=>{
    console.log('install')
})