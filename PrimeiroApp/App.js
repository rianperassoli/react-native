import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export default class App extends Component {

  render() {

    // declarando variável - utiliza opção let
    let nome = 'Roberson Alves';

    return (
      <View style={{backgroundColor: 'red', flex: 1,
      justifyContent: 'center',
      alignItems: 'center'}}>
        {/* Cria uma view - componente container para os outros componente */}
        <Text style={styles.texto}>Meu primeiro App!</Text>
        <Image source={require('./src/img/primeiroapp.png')}></Image>
        <Text style={{fontSize: 20, color: 'black'}}>{nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  texto: {
    color: 'white', fontSize: 40, fontWeight: 'bold'
  }
});
