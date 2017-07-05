import React from 'react';
import { StyleSheet, TextInput, View, Image, Button, Alert, TouchableOpacity, Text } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class NewPage extends React.Component {
  render() {
     
    return (  
      <View style={styles.container}>
        <View>
           <Text>This is a second page</Text>
        </View>
      <TouchableOpacity  style={styles.buttonContainer} onPress = {()=> Actions.Tabs({})}>
          <Text  style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>     
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
   buttonContainer:{
    backgroundColor: '#ff0',
    flex:1,
    paddingVertical:15,
    position: 'absolute',
    bottom: 15,
    width:'50%', 
    
  },
  buttonText:{
    textAlign:'center',
    color:'#000',
    fontSize:12,
    fontWeight: 'bold',
  }
});












