const admin = require('firebase-admin');
require('dotenv').config()



const serviceAccount = {
  "type": "service_account",
  "project_id": "quiz-myprojectbride",
  "private_key_id": process.env.GOOGLE_CLOUD_PRIVATE_KEY_ID,
  // TODO: Take private key from environment variable not working 
  "private_key": process.env.GOOGLE_CLOUD_PRIVATE_KEY,
  "client_email": "firebase-adminsdk-ehkb3@quiz-myprojectbride.iam.gserviceaccount.com",
  "client_id": "105042583064944336174",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ehkb3%40quiz-myprojectbride.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

const fbadmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://quiz-myprojectbride.firebaseio.com",
}, "admin-api");

const app = require('express')();
const serverless = require('serverless-http');
const bodyParser = require('body-parser');


const express = require("express");
const cors = require('cors')({ origin: true });


const router = express.Router();

// const v1Router = require("./v1/routes/routes");

// const PORT = process.env.PORT || 1337;

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

// get all categories
router.get('/categories', (req, res) => {
  cors(req, res, () => {
    fbadmin
      .firestore()
      .collection('Category')
      .orderBy('index', 'asc')
      .get()
      .then((categoryData) => {
        const categories = [];
        categoryData.forEach((categoryDoc) => {
          categories.push({
            key: categoryDoc.id,
            categoryId: categoryDoc.id,
            index: categoryDoc.data().index,
            name: categoryDoc.data().name,
            body: categoryDoc.data().body,
          });
        });
        return res.json(categories);
      })
      .catch((err) => console.error(err));
  });
});

// get specific Category option
router.get('/category/:categoryId', (req, res) => {
  cors(req, res, () => {
    const categoryData = [];
    fbadmin
      .firestore()
      .collection('Options')
      .orderBy('order', 'asc')
      .where('categoryId', '==', `${req.params.categoryId}`)
      .get()
      .then((data) => {
        data.forEach((doc) => {
          categoryData.push({
            optionId: doc.id,
            name: doc.data().name,
            order: doc.data().order,
            category: doc.data().category,
            categoryId: doc.data().categoryId,
            imageUrl: doc.data().imageUrl,
          });
        });
        return res.json(categoryData);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({
          err: err.code,
        });
      });
  });
});

// ? get image from option
router.get('/optionsImages', (req, res) => {
  cors(req, res, () => {
    const images = {};
    fbadmin
      .firestore()
      .collection('Options')
      .orderBy('imageUrl.src', 'asc')
      .get()
      .then((data) => {
        data.forEach((doc) => {
          console.log(doc.data().imageUrl.src);
          console.log(doc.id);
          images[doc.id] = doc.data().imageUrl.src;
        });
        return res.json(images);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({
          err: err.code,
        });
      });
  });
});

// ? get all options
router.get('/options', (req, res) => {
  cors(req, res, () => {
    fbadmin
      .firestore()
      .collection('Options')
      .get()
      .then((data) => {
        const options = [];
        data.forEach((doc) => {
          options.push({
            optionId: doc.id,
            name: doc.data().name,
          });
        });
        return res.json(options);
      })
      .catch((err) => console.error(err));
  });
});

// ? Post one result
router.post('/response', (req, res) => {
  // cors(req, res, () => {
  let name = '';
  if (req.body.name !== null && req.body.name !== undefined) {
    name = req.body.name;
  } else {
    name = 'anonymous';
  }

  const newResponse = {
    answer: req.body.answer,
    answerNames: req.body.answerNames,
    user: name,
    dateAnswered: new Date().toISOString(),
  };

  fbadmin
    .firestore()
    .collection('Responses')
    .add(newResponse)
    .then((doc) => {
      const resResponse = newResponse;
      resResponse.responseId = doc.id;
      res.json(resResponse);
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
      });
      console.error(err);
    });
  // });
});

// ? get all products
router.get('/products', (req, res) => {
  cors(req, res, () => {
    fbadmin
      .firestore()
      .collection('Products')
      .get()
      .then((data) => {
        const Products = [];
        data.forEach((doc) => {
          Products.push({
            productId: doc.id,
            name: doc.data().name,
            option: doc.data().option,
            productPageUrl: doc.data().productPageUrl,
          });
        });
        return res.json(Products);
      })
      .catch((err) => console.error(err));
  });
});

// ? get image from product
router.get('/productImages', (req, res) => {
  cors(req, res, () => {
    const images = {};
    fbadmin
      .firestore()
      .collection('Products')
      .orderBy('image.src', 'asc')
      .get()
      .then((data) => {
        data.forEach((doc) => {
          console.log(doc.data().image.src);
          console.log(doc.id);
          images[doc.id] = doc.data().image.src;
        });
        return res.json(images);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({
          err: err.code,
        });
      });
  });
});


app.use("/.netlify/functions/api", router);
// app.use("/api/", router);
// app.listen(PORT, () => {
//   console.log(`API is listening on port ${PORT}`);
// });


// export async function handler

module.exports = app;

// module.exports.handler = serverless(app);
module.exports.handler = function (event, context) {
  // const api = express();
  // const router = Router();
  // router.get('/hello', (req, res) => res.send('Hello World!'));
  // app.use('/api/', router);

  // app.use("/.netlify/functions/api", router);
  // app.use("", router);

  return serverless(app)(event, context);
}
