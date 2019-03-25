import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class TelaPrincipal extends Component {

    static navigationOptions = ({navigation}) => ({
        title: 'Home',
        header: null
    });
  
    constructor(props){
      super(props);
      this.state = {};
  
      this.irCadastro = this.irCadastro.bind(this);
    }
  
    irCadastro(){  
      this.props.navigation.navigate('Cadastro', {nome: 'Roberson Alves', 
      idade: '39'});  
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Text>Olá Mundo! Tela Home</Text>
          <Button title="Ir para Cadstro" onPress={this.irCadastro} />
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