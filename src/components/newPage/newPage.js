import React from 'react';
import { StyleSheet, TextInput, View, Image, Button, Alert, TouchableOpacity, Text } from 'react-native';

export default class newPage extends React.Component {
  render() {
     
    return (  
      <View style={styles.container}>
        <View>
           <Text>This is a second page</Text>
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
});












