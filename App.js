import React from 'react';
import { StyleSheet, TextInput, View, Navigator } from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

import Splash from './src/components/splash/splash';
import newPage from './src/components/newPage/newPage';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="splash" component={Splash} initial hideNavBar/>
    <Scene key="newPage" component={newPage} hideNavBar/>
  </Scene> 
);

export default class MyTipsApp extends React.Component {
  render() {     
   return <Router scenes={scenes}/>
  } 
}















