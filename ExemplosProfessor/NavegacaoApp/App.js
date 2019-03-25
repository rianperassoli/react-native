import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TelaPrincipal from './src/TelaPrincipal';
import TelaCadastro from './src/TelaCadastro';

console.disableYellowBox = true;

// navegador stack
const Navegador = createStackNavigator({
  Home: { screen: TelaPrincipal },
  Cadastro: { screen: TelaCadastro }
});

// necessário um container principal
const App = createAppContainer(Navegador);
export default App;
