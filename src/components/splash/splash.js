import React from 'react';
import { StyleSheet, TextInput, View, Image, Button, Alert, TouchableOpacity, Text } from 'react-native';
import {Actions} from 'react-native-router-flux';


export default class Splash extends React.Component {
  render() {
     
    return (  
      <View style={styles.container}>
        <View style={styles.imag}>
          <Image source={require('../../images/logo1.png')}  style={styles.logo}/>  
        </View> 
        <View>
          <Image source={require('../../images/background1.png')}  style={styles.backgroundImage}/>  
        </View> 

     
        <TouchableOpacity  style={styles.buttonContainer} onPress = {()=> Actions.NewPage({})}>
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
  ButtonVal:{   
    position: 'absolute',
    bottom: 3,
    padding: 20,
   
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
    backgroundColor: '#1e3808',
    flex:1,
    paddingVertical:15,
    position: 'absolute',
    bottom: 15,
    width:'50%', 
    
  },
  buttonText:{
    textAlign:'center',
    color:'#fff',
    fontSize:12,
    fontWeight: 'bold',
  }
});












