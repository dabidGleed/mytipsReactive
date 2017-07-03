import React from 'react';
import { StyleSheet, TextInput, View, Image, Button, Alert, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
     
    return (  
      <View style={styles.container}>
        <View style={styles.imag}>
          <Image source={require('./images/logo1.png')}  style={styles.logo}/>  
        </View> 
        <View>
          <Image source={require('./images/background1.png')}  style={styles.backgroundImage}/>  
        </View> 

     
        <TouchableOpacity  style={styles.buttonContainer}>
          <text  style={styles.buttonText}>click</text>
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
    backgroundColor: '#f0f',
  },
  ButtonVal:{   
    position: 'absolute',
    bottom: 3,
    padding: 20,
   
  },
  Button:{
    backgroundColor:'#f0f',
  },
   backgroundImage: {
    resizeMode: 'contain',
    flex:1,
    zIndex:0,
    position:'relative'
  },
  logo:{
      resizeMode: 'contain',
      width:130,
      zIndex:1,

  },
  imag:{
     position:'absolute',
      justifyContent: 'center', 
  },
  buttonContainer:{
    backgroundColor: '#f0f',
    paddingVertical:10,
  },
  buttonText:{
    textAlign:'center',
    color:'#ff0',
  }
});












