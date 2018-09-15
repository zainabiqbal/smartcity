var admin = require("firebase-admin");
var serviceAccount = require("./package.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://smartcity-2107c.firebaseio.com"
});

export default admin;