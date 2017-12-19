// Import Modules
const express             = require('express');
// const router              = express.Router();

// Firebase Management
let apiKey = 'AIzaSyDf24z7yT9KB8-sUmLmbViR4HqRrcFPba4';
// let fcm = new FCM(apiKey);

var message = {
  registration_id: 'Device registration id', // required
  collapse_key: 'Collapse key',
  'data.key1': 'value1',
  'data.key2': 'value2'
}

let url = 'https://fcm.googleapis.com/fcm/send';

// Endpoints
router.get('/', (req,res) => {
  res.sendFile('../views/index.html', {root: __dirname });
});


// messaging.setBackgroundMessageHandler(function(payload) {
// console.log('[firebase-messaging-sw.js] Received background message ', payload);
// // Customize notification here
// const notificationTitle = 'Background Message Title';
// const notificationOptions = {
//   body: 'Background Message body.',
//   icon: '/firebase-logo.png'
// };

// return self.registration.showNotification(notificationTitle,
//   notificationOptions);
// });


module.exports = router;
