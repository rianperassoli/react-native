import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class TelaCadastro extends Component{

    static navigationOptions = ({navigation}) => ({
        tabBarLabel: 'Cadastrar',
        tabBarIcon:({focused, tintColor}) => {
          if(focused){
            return(
              <Image source={require('./img/cadastrar_ativo.png')} style={{width: 26, height: 26}} />
            );
          }else{
           return(
             <Image source={require('./img/cadastrar_inativo.png')} style={{width: 26, height: 26}} />
           );
          }
        }

    });
  
    render(){
      return(
        <View style={styles.container}>
          <Text> Tela de Cadastro</Text>

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