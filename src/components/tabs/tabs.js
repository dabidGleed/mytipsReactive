import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import NextPage from '../nextPage/nextPage';
import NewPage from '../newPage/newPage';

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

export default class tabs extends React.Component {
  render() {
    return <ScrollableTabView
      style={{marginTop: 20, }}
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar />}
    >
      <NextPage tabLabel='All' />
      <NewPage tabLabel='All' />
    </ScrollableTabView>
  }
}