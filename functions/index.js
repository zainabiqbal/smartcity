const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.Notification = functions.database.ref('Bins/{pushId}/Data').onCreate((snapshot, context) => {
    console.log("Value -->");
    console.log(snapshot);
});
