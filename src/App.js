import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    console.disableYellowBox = true;
    const config = {
      apiKey: 'AIzaSyBubrZfeGEvTisf-fdJMdEXcHYdhwF9Adk',
      authDomain: 'shop1stop-bee2e.firebaseapp.com',
      databaseURL: 'https://shop1stop-bee2e.firebaseio.com',
      storageBucket: 'shop1stop-bee2e.appspot.com',
      messagingSenderId: '254546621322'
    };
    firebase.initializeApp(config);
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
