import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import TelaPrincipal from './src/TelaPrincipal';
import TelaCadastro from './src/TelaCadastro';

console.disableYellowBox=true;

const Navegador = createMaterialTopTabNavigator({
  Home: { screen: TelaPrincipal },
  Cadastro: { screen: TelaCadastro}
},{
  tabBarOptions:{
    activeTintColor: '#ffffff',
    inactiveTintColor: '#CCCCCC',
    showIcon: true,
    style:{
      backgroundColor: '#570076'
    },
    indicatorStyle:{
      backgroundColor: null 
    }
  }
});

// necessário um container principal
const App = createAppContainer(Navegador);
export default App;
