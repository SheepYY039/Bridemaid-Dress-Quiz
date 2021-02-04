let vars = {
  // * open nav
  isOpened: false,

  // * initial loading
  isLoading: false,

  // * current question number
  // || change on button click in Question.js or Buttons.js
  question: 0,

  //* final answer submitted
  response: {
    NAcAAiBsiWVwrtyGOlKR: 'red', // categoryId: option
  },

  // *  updates when user clicks
  answer: {
    NAcAAiBsiWVwrtyGOlKR: 'red', // categoryId: option
  },

  // ? Option images
  // || get("/optionsImages")
  OptionImage: {
    NAcAAiBsiWVwrtyGOlKR:
      'https://firebasestorage.googleapis.com/v0/b/quiz-myprojectbride.appspot.com/o/Options%2FNAcAAiBsiWVwrtyGOlKR%2FimageUrl?alt=media&token=2cf92e4f-5b2c-4e41-82e3-cf9b57731c71',
    p3Ou1e5HYb9BBWRTiTc4:
      'https://firebasestorage.googleapis.com/v0/b/quiz-myprojectbride.appspot.com/o/Options%2Fp3Ou1e5HYb9BBWRTiTc4%2FimageUrl?alt=media&token=76cceeaa-b279-4969-b5c5-3c491094bd80',
    q9wrUXvSWEWlaWbrvvCk:
      'https://firebasestorage.googleapis.com/v0/b/quiz-myprojectbride.appspot.com/o/Options%2Fq9wrUXvSWEWlaWbrvvCk%2FimageUrl?alt=media&token=a41372e8-539b-418f-b219-0dbc0f390c59',
  },

  // ? Product images
  // || get("/productImages")
  ProductImage: {
    NAcAAiBsiWVwrtyGOlKR:
      'https://firebasestorage.googleapis.com/v0/b/quiz-myprojectbride.appspot.com/o/Options%2FNAcAAiBsiWVwrtyGOlKR%2FimageUrl?alt=media&token=2cf92e4f-5b2c-4e41-82e3-cf9b57731c71',
    p3Ou1e5HYb9BBWRTiTc4:
      'https://firebasestorage.googleapis.com/v0/b/quiz-myprojectbride.appspot.com/o/Options%2Fp3Ou1e5HYb9BBWRTiTc4%2FimageUrl?alt=media&token=76cceeaa-b279-4969-b5c5-3c491094bd80',
    q9wrUXvSWEWlaWbrvvCk:
      'https://firebasestorage.googleapis.com/v0/b/quiz-myprojectbride.appspot.com/o/Options%2Fq9wrUXvSWEWlaWbrvvCk%2FimageUrl?alt=media&token=a41372e8-539b-418f-b219-0dbc0f390c59',
  },

  // ?categories
  // || get("/categories")
  categories: {
    key: '',
    categoryId: '',
    index: '',
    name: '',
    body: '',
  },
  // ? options
  // || get options using categories
  options: {
    optionId: '3deCAacmh1ExOZnCS3ke',
    name: 'red',
    order: '1',
    categoryId: 'dafadDKDJGksd437badsf',
    imageUrl: {
      src: '',
      title: '',
    },
  },

  // ? products
  // || get products from selected tags/ options
  products: {
    productId: '3deCAacmh1ExOZnCS3ke',
    name: 'Dress 1',
    option: ['q9wrUXvSWEWlaWbrvvCk'],
    productPageUrl: 'www.google.com',
  },
};
