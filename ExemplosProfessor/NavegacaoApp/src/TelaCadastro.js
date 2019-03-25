import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class TelaCadastro extends Component{
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.nome,
        headerStyle:{
            backgroundColor: '#FF0000'
        },
        headerTintColor: '#FFFFFF'
    });
  
    render(){
      return(
        <View style={styles.container}>
          <Text>Nome: {this.props.navigation.state.params.nome} </Text>
          <Text>Idade: {this.props.navigation.state.params.idade} Anos</Text>
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