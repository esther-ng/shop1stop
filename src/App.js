import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';
import config from '../config';

class App extends Component {

  componentWillMount() {
    console.disableYellowBox = true;
    const configInfo = {
      apiKey: config.API_KEY,
      authDomain: config.AUTH_DOMAIN,
      databaseURL: config.DATABASE_URL,
      storageBucket: config.STORAGE_BUCKET
    };
    firebase.initializeApp(configInfo);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }

}

export default App;
