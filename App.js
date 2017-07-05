import React from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';

import splash from './src/components/splash/splash';
import newPage from './src/components/newPage/newPage';
import nextPage from './src/components/nextPage/nextPage';
import tabs from './src/components/tabs/tabs';
const scenes = Actions.create(
  <Scene key="root">
    <Scene key="Splash" component={splash} initial hideNavBar/>
    <Scene key="NewPage" component={newPage} hideNavBar/>
    <Scene key="NextPage" component={nextPage} hideNavBar/>
    <Scene key="Tabs" component={tabs} hideNavBar/>
  </Scene> 
);

export default class MyTipsApp extends React.Component {
  render() {     
   return <Router scenes={scenes}/>
  } 
}















