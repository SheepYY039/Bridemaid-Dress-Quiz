/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';

import './App.css';

import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { NavBurger, NavSlide } from './Nav/NavBar';

import Question from './Content/Question';
import Choices from './Content/Choices';
import Buttons from './Content/Buttons';

import Loader from './Loading';

import Landing from './Landing';

const App = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [question, setQuestion] = useState(0);
  const [response, setResponse] = useState({});
  const [answer, setAnswer] = useState({});
  const [answerId, setAnswerId] = useState({});
  const [optionImage, setOptionImage] = useState({});
  const [answerNameArr, setAnswerNameArr] = useState([]);
  const [productImage, setProductImage] = useState({
    VWjnID46veTqrvwN6yQN: '',
  });
  const [products, setProducts] = useState([
    {
      productId: '',
      name: '',
      option: [],
      productPageUrl: '',
    },
  ]);
  const [categories, setCategories] = useState([
    {
      key: '',
      categoryId: '',
      index: '',
      name: '',
      body: '',
    },
  ]);
  const [options, setOptions] = useState([
    {
      optionId: '',
      name: '',
      order: '',
      categoryId: '',
      imageUrl: {
        src: '',
        title: '',
      },
    },
  ]);
  const [optionName, setOptionName] = useState([
    {
      optionId: '',
      name: '',
    },
  ]);

  const clearState = () => {
    setAnswer({});
    setAnswerId({});
    setResponse({});
    setAnswerNameArr([]);
  };
  // style for contents
  let contentStyle = { width: '100%', height: '92%' };
  if (isOpened) {
    contentStyle = {
      height: '92%',
      opacity: '30%',
      zIndex: -1,
    };
  } else {
    contentStyle = { width: '100%', height: '92%' };
  }
  axios.defaults.baseURL =
    'https://myprojectbride-quiz.netlify.app/.netlify/functions/api';
  useEffect(() => {
    setIsLoading(true);

    // use effect fetch categories
    const fetchData = async () => {
      setIsLoading(true);
      await axios
        .get('/categories')
        .then((cat) => {
          // console.log(data); works fine
          setCategories(cat.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();

    // use effect fetch option names and id
    const getOptionsName = async () => {
      setIsLoading(true);
      await axios
        .get('/options')
        .then((data) => {
          const allOptions = data.data;
          setOptionName(allOptions);
          return optionName;
        })
        .catch((err) => console.log(err));
    };
    getOptionsName();

    // use effect fetch option images
    const getOptionImage = async () => {
      setIsLoading(true);
      await axios
        .get('/optionsImages')
        .then((data) => {
          const allImages = data.data;
          setOptionImage(allImages);
          return optionImage;
        })
        .catch((err) => console.log(err));
    };
    getOptionImage();

    // use effect fetch product images
    const getProductImage = async () => {
      setIsLoading(true);
      await axios
        .get('/productImages')
        .then((data) => {
          const allImages = data.data;
          setProductImage(allImages);
          return productImage;
        })
        .catch((err) => console.log(err));
    };
    getProductImage();

    // use effect fetch products
    const getProducts = async () => {
      setIsLoading(true);
      await axios
        .get('/products')
        .then((product) => {
          // console.log(data); works fine
          setProducts(product.data);
          return products;
        })
        .catch((err) => console.log(err));
    };
    getProducts();
  }, []);

  // use effect fetch options using categories
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`/category/${categories[question].categoryId}`)
        .then((opt) => {
          // console.log(data); works fine
          const optionList = opt.data;
          setOptions(optionList);
        })
        .catch((err) => console.log(err));
      setIsLoading(false);
    };
    fetchData();
  }, [categories, question]);

  return started ? (
    isLoading ? (
      <Loader />
    ) : (
      <div className="App">
        <NavBurger isOpened={isOpened} setIsOpened={setIsOpened} />
        <div className="ContentContainer">
          <Grid
            spacing={1}
            className="Content"
            container
            style={contentStyle}
            justify="flex-end"
          >
            <Grid md={4} sm={12} item container>
              <Grid item md={11} sm={12}>
                <Question
                  categories={categories}
                  setQuestion={setQuestion}
                  question={question}
                  response={response}
                  setResponse={setResponse}
                  answer={answer}
                  answerId={answerId}
                  productImage={productImage}
                  products={products}
                  optionName={optionName}
                  answerNameArr={answerNameArr}
                  setAnswerNameArr={setAnswerNameArr}
                  onSubmitCb={clearState}
                  setStarted={setStarted}
                />
              </Grid>
              <Grid item md="auto">
                <Hidden only={['xs', 'sm']}>
                  <div className="verticalLine" />
                </Hidden>
              </Grid>
            </Grid>
            <Hidden smUp>
              <Grid
                item
                md={8}
                sm={12}
                style={{
                  height: '75%',
                  overflowX: 'hidden',
                }}
              >
                <Choices
                  options={options}
                  response={response}
                  answer={answer}
                  answerId={answerId}
                  image={optionImage}
                  setAnswer={setAnswer}
                  setAnswerId={setAnswerId}
                />
              </Grid>
            </Hidden>
            <Hidden xsDown mdUp>
              <Grid
                item
                md={8}
                sm={12}
                style={{
                  height: '75%',
                  overflowY: 'scroll',
                  overflowX: 'hidden',
                }}
              >
                <Choices
                  options={options}
                  response={response}
                  answer={answer}
                  answerId={answerId}
                  image={optionImage}
                  setAnswer={setAnswer}
                  setAnswerId={setAnswerId}
                />
              </Grid>
            </Hidden>
            <Hidden smDown>
              <Grid item md={8} sm={12} style={{ height: '100%' }}>
                <Choices
                  options={options}
                  response={response}
                  answer={answer}
                  answerId={answerId}
                  image={optionImage}
                  setAnswer={setAnswer}
                  setAnswerId={setAnswerId}
                />
              </Grid>
            </Hidden>
            <Grid item sm={6} xs={12}>
              <Hidden mdUp>
                <Buttons
                  setStarted={setStarted}
                  categories={categories}
                  setQuestion={setQuestion}
                  question={question}
                  response={response}
                  setResponse={setResponse}
                  answer={answer}
                  answerId={answerId}
                  productImage={productImage}
                  products={products}
                  optionName={optionName}
                  answerNameArr={answerNameArr}
                  setAnswerNameArr={setAnswerNameArr}
                  onSubmitCb={clearState}
                />
              </Hidden>
            </Grid>
          </Grid>
        </div>
        <NavSlide
          isOpened={isOpened}
          categories={categories}
          answer={answer}
          question={question}
          setQuestion={setQuestion}
          setIsOpened={setIsOpened}
        />
      </div>
    )
  ) : (
    <Landing setStarted={setStarted} />
  );
};

export default App;
