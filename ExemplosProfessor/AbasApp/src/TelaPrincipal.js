import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class TelaPrincipal extends Component {

    static navigationOptions = ({navigation}) => ({
       tabBarLabel: 'Inicio',
       tabBarIcon:({focused, tintColor}) => {
         if(focused){
           return(
             <Image source={require('./img/home_ativo.png')} style={{width: 26, height: 26}} />
           );
         }else{
          return(
            <Image source={require('./img/home_inativo.png')} style={{width: 26, height: 26}} />
          );
         }
       }
       
    });
  
    constructor(props){
      super(props);
      this.state = {};

    }
  
  
    render() {
      return (
        <View style={styles.container}>
          <Text>Tela Inicial</Text>
        </View>
      );
    }
  }


  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });