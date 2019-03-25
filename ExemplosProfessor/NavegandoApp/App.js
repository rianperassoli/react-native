import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import TelaPrincipal from './src/TelaPrincipal';
import Tela2 from './src/Tela2';
import Tela3 from './src/Tela3';

// usado para desabilitar aviso em amarelo
console.disableYellowBox=true;

const Navegador = createStackNavigator({
  Home: { screen: TelaPrincipal },
  Tela2: { screen: Tela2 },
  Tela3: { screen: Tela3 }
});

// necessário um container principal
const App = createAppContainer(Navegador);
export default App;
