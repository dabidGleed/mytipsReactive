import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: '/images/logo1.png'
    }; 
    return (  
      <View style={styles.container}>
        <View>
          <Image source={require('./images/logo1.png')} style={{width: 120, resizeMode: 'contain'}}/>  
        </View> 
        <View style={styles.ButtonVal}>
          <Button onPress={() => { Alert.alert('You tapped the button!')}} title="Continue" />
        </View>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#b0d732', 
    alignItems: 'center',
    justifyContent: 'center', 
    padding:20,
  },
  ButtonVal:{   
    position: 'absolute',
    bottom: 3,
    padding: 20
    
  }
});
