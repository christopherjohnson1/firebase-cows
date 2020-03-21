import firebase from 'firebase/app';
import auth from './components/auth/auth';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import myNavbar from './components/myNavBar/myNavbar';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavbar.logoutEvent();
};

init();
