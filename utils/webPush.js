import 'firebase/messaging'
import firebase from 'firebase/app'
import localforage from 'localforage'

const firebaseCloudMessaging = {
  //checking whether token is available in indexed DB
  tokenInlocalforage: async () => {
    return localforage.getItem('fcm_token')
  },
  //initializing firebase app
  init: async function () {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyCN4t1nSfY03D0vwE14R5pd0D-hhAzjHh0",
        authDomain: "cvslk-compro.firebaseapp.com",
        projectId: "cvslk-compro",
        storageBucket: "cvslk-compro.appspot.com",
        messagingSenderId: "905506852813",
        appId: "1:905506852813:web:0f30af51cd668730cdbe84",
        measurementId: "G-39RM9VQG0D"
      })

      try {
        console.log('try get token...')
        const messaging = firebase.messaging()
        const tokenInLocalForage = await this.tokenInlocalforage()
        //if FCM token is already there just return the token
        if (tokenInLocalForage !== null) {
          console.log('fcm token in storage', tokenInLocalForage)
          return tokenInLocalForage
        }
        //requesting notification permission from browser
        const status = await Notification.requestPermission()
        if (status && status === 'granted') {
          //getting token from FCM
          const fcm_token = await messaging.getToken({
            vapidKey: 'BGwwgpGiC-llq4tqKmJxSSROIg7Xvwt8pX1-w7p8bPxEc01qw_HEfhTcWBw0XWBSzb2WZi5_8GGTkM4EsuOVoh0'
          })
          if (fcm_token) {
            //setting FCM token in indexed db using localforage
            localforage.setItem('fcm_token', fcm_token)
            console.log('fcm token', fcm_token)
            //return the FCM token after saving it
            return fcm_token
          }
        }
      } catch (error) {
        console.error(error)
        return null
      }
    }
  }
}
export { firebaseCloudMessaging }
