const admin = require('firebase-admin');
const app = require('express')();
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const v1Router = require("./v1/routes/routes");

app.use("/api/v1", v1Router);

const serviceAccount = require("./secrets/quiz-myprojectbride-firebase-adminsdk-ehkb3-35095ef0d2.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://quiz-myprojectbride.firebaseio.com"
});

const PORT = process.env.PORT || 1337;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, X-Access-Token, content-type',
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

module.exports.handler = serverless(app);