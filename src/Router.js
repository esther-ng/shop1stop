import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ShoppingListCreate from './components/ShoppingListCreate';
import ShoppingListView from './components/ShoppingListView';
import ShoppingIndex from './components/ShoppingIndex';
import AddItem from './components/AddItem';

const RouterComponent = () => {
  // console.log(this.state);
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
        <Scene key="shoppingListView" component={ShoppingListView} title={this.title} />
        <Scene key="addItemForm" component={AddItem} title="Add Item" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
