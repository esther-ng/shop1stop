import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ShoppingListCreate from './components/ShoppingListCreate';
import ShoppingListForm from './components/ShoppingListForm';
import ShoppingIndex from './components/ShoppingIndex';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.shoppingListCreate()}
          rightTitle="Add"
          key="shoppingIndex"
          component={ShoppingIndex}
          title="Shopping Lists"
          initial
        />
        <Scene key="shoppingListCreate" component={ShoppingListCreate} title="New Shopping List" />
        <Scene key="shoppingListForm" component={ShoppingListForm} title="Add Items" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
