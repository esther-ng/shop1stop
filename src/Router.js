import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import ShoppingListCreate from './components/ShoppingListCreate';
import ShoppingListEdit from './components/ShoppingListEdit';
import ShoppingListView from './components/ShoppingListView';
import ShoppingIndex from './components/ShoppingIndex';
import AddItem from './components/AddItem';
import EditItem from './components/EditItem';
// import SelectMatches from './components/SelectMatches';
import SelectMatch from './components/SelectMatch';

const RouterComponent = () => {
  // console.log(this.state);
  return (
    <Router
      sceneStyle={{ paddingTop: 54, backgroundColor: '#FDFCF2' }}
      navigationBarStyle={{
        backgroundColor: '#FDFCF2' }}
      titleStyle={{ color: '#21897E', fontWeight: 'bold', fontSize: 20 }}
    >
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Shop One" />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => Actions.shoppingListCreate()}
          rightTitle="+"
          rightButtonTextStyle={{ color: '#21897E', fontWeight: 'bold', fontSize: 25 }}
          rightButtonStyle={{ paddingRight: 20, paddingTop: 0 }}
          key="shoppingIndex"
          component={ShoppingIndex}
          title="Shopping Lists"
          initial
        />
        <Scene key="shoppingListCreate" component={ShoppingListCreate} title="New Shopping List" />
        <Scene key="shoppingListEdit" component={ShoppingListEdit} title="Edit Shopping List" />
        <Scene key="shoppingListView"
          onRight={() => Actions.addItemForm()}
          rightTitle="+"
          rightButtonTextStyle={{ color: '#21897E', fontWeight: 'bold', fontSize: 25 }}
          rightButtonStyle={{ paddingRight: 20, paddingTop: 0 }}
          component={ShoppingListView}
          title={this.title} />
        <Scene key="addItemForm" component={AddItem} title="Add Item" />
        <Scene key="editItemForm" component={EditItem} title="Edit Item" />
        <Scene key="selectMatch" component={SelectMatch} title={this.title} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
