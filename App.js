/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { PureComponent } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Form from './components/Form';
import VisitorList from './components/VisitorList';
import NewsFeed from './components/NewsFeed';
import {Provider} from 'react-redux';
import store from './store';
import {readDataFromDisk, saveDataIntoDisk} from './actions/uiAction';

const Drawer = createDrawerNavigator();
export default class App extends PureComponent{

componentDidMount(){
  readDataFromDisk();
}

  componentWillUnmount(){
    const userList = store.uiReducer?.userList;

    saveDataIntoDisk(userList);
  }

  render(){
    return (
      <Provider store={store}>
          <NavigationContainer>
        <Drawer.Navigator initialRouteName="Form">
          <Drawer.Screen name="Form" component={Form} />
          <Drawer.Screen name="VisitorList" component={VisitorList} />
          <Drawer.Screen name="NewsFeed" component={NewsFeed} />
        </Drawer.Navigator>
      </NavigationContainer>
         </Provider>
    )
  }
}

