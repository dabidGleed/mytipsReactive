/*import React from 'react';
import { StyleSheet, View, Image,Text} from 'react-native';
import {Actions} from 'react-native-router-flux';


export default class NextPage extends React.Component {
  render() {
     
    return (  
      <View style={styles.container}>
        
        <View>
          <Image source={require('../../images/background1.png')}  style={styles.backgroundImage}/>  
        </View> 
        <View style={styles.Tpage}>
        <Text>Third Page</Text>
        </View>
        </View>
 
    );
  } 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: '#fff',
  },
   backgroundImage: {
    resizeMode: 'contain',
    flex:1,
    zIndex:0,
    position:'relative'
  },
  Tpage:{
    //   bottom:'50%'
    position:'absolute',
    zIndex:1,
  }
});











*/

import React, {Component} from 'react';
import {ActivityIndicator, FlatList, ListView, StyleSheet, Text, Image, View} from 'react-native';

import Row from './Row';


export default class ListViewDemo extends React.Component {
    /*
     * Removed for brevity
     */
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        return fetch('http://ec2-13-126-41-169.ap-south-1.compute.amazonaws.com/tips/list/all')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson),
                }, function () {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.heading}>My Tips</Text>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(data) => <Row {...data} />}
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20,
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E6E',
    },
    heading: {
        fontSize: 18,
        marginBottom: 5
    }
});
