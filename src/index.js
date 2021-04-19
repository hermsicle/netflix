import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyles} from './global-styles'
import {FirebaseContext} from './context/firebase'
import dotenv from 'dotenv'

dotenv.config()

const {REACT_APP_API_KEY, REACT_APP_APP} = process.env

// import { seedDatabase } from './seed';

const config = {
  apiKey: REACT_APP_API_KEY,
  authDomain: "netfix-scrimba-clone.firebaseapp.com",
  databaseURL: 'netfix-scrimba-clone.firebaseio.com',
  projectId: "netfix-scrimba-clone",
  storageBucket: "netfix-scrimba-clone.appspot.com",
  messagingSenderId: "793275128541",
  appId: REACT_APP_APP
}


const firebase = window.firebase.initializeApp(config)
// seedDatabase(firebase)

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles/>
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);

