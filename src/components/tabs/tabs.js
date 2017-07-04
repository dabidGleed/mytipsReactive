import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

/*export default React.createClass({
  render() {
    return <ScrollableTabView
      style={{marginTop: 20, }}
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar />}
    >
      <Text tabLabel='All'>All</Text>
      <Text tabLabel='Male'>Male</Text>
      <Text tabLabel='Female'>Female</Text>
    </ScrollableTabView>;
  },
});*/

export default class tabs extends React.Component {
  render() {
    return <ScrollableTabView
      style={{marginTop: 20, }}
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar />}
    >
      <Text tabLabel='All'>All</Text>
      <Text tabLabel='Male'>Male</Text>
      <Text tabLabel='Female'>Female</Text>
    </ScrollableTabView>
  }
}