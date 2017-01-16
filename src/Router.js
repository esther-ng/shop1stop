import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ShoppingListCreate from './components/ShoppingListCreate';
import ShoppingListEdit from './components/ShoppingListEdit';
import ShoppingListView from './components/ShoppingListView';
import ShoppingIndex from './components/ShoppingIndex';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
import SelectMatches from './components/SelectMatches';
import SelectMatch from './components/SelectMatch';
import CompareStores from './components/CompareStores';
import StoreListView from './components/StoreListView';

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
        <Scene key="shoppingListEdit" component={ShoppingListEdit} title="Edit Shopping List" />
        <Scene key="shoppingListView" component={ShoppingListView} title={this.title} />
        <Scene key="addItemForm" component={AddItem} title="Add Item" />
        <Scene key="editItemForm" component={EditItem} title="Edit Item" />
        <Scene key="selectMatches" component={SelectMatches} title="Select Matches" />
        <Scene key="selectMatch" component={SelectMatch} title={this.title} />
        <Scene key="compareStores" component={CompareStores} title="Compare Stores" />
        <Scene key="storeListView" component={StoreListView} title={this.title} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
