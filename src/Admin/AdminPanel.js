import React from 'react';
import { Admin, Resource } from 'react-admin';
import Category from '@material-ui/icons/Category';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import {
  CategoryList,
  CategoryCreate,
  CategoryEdit,
  CategoryShow,
} from './Pages/categories';
import {
  ProductList,
  ProductCreate,
  ProductEdit,
  ProductShow,
} from './Pages/products';
import {
  OptionsList,
  OptionEdit,
  OptionCreate,
  OptionShow,
} from './Pages/options';
import { ResponseList, ResponseShow } from './Pages/responses';

import Dashboard from './Pages/Dashboard';
import CustomLoginPage from './Login/CustomLoginPage';

import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from 'react-admin-firebase';

const config = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: 'quiz-myprojectbride.firebaseapp.com',
  databaseURL: 'https://quiz-myprojectbride.firebaseio.com',
  projectId: 'quiz-myprojectbride',
  storageBucket: 'quiz-myprojectbride.appspot.com',
  messagingSenderId: '442276546168',
  appId: '1:442276546168:web:ac4096345ced5e53ddcf8d',
  measurementId: 'G-FXQS8M4945',
}

const options = {};

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);


const AdminPanel = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}
    loginPage={CustomLoginPage}
  // history={history}
  // catchAll={FourOhFour}
  >
    <Resource
      name="Category"
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
      show={CategoryShow}
      icon={Category}
    />
    <Resource
      name="Options"
      list={OptionsList}
      edit={OptionEdit}
      create={OptionCreate}
      show={OptionShow}
      icon={LibraryBooks}
    />
    <Resource
      name="Products"
      list={ProductList}
      edit={ProductEdit}
      create={ProductCreate}
      show={ProductShow}
      icon={ShoppingCart}
    />
    <Resource
      name="Responses"
      list={ResponseList}
      show={ResponseShow}
      icon={QuestionAnswerIcon}
    />
  </Admin>
);

export default AdminPanel;
