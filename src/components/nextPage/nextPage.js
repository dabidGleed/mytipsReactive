import React from 'react';
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












