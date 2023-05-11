const express = require("express");
const admin = require("firebase-admin");
const cors = require('cors')({ origin: true });

const router = express.Router();


// get all categories
router.get('/categories', (req, res) => {
  cors(req, res, () => {
    admin
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
    admin
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
    admin
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
    admin
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

  admin
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
    admin
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
    admin
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

module.exports = router;