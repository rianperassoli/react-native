import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {

  render() {
    return (

      <View style={styles.main}>

        {/*Header*/}
        <View style={styles.header}>
          <Text style={styles.texto}> Cabecalho </Text>
        </View>


        {/*body*/}
        <View style={styles.body}>
          <Text style={styles.textoAmarelo}> Texto </Text>
        </View>


        {/*Footer*/}
        <View style={styles.footer}>
          <Text style={styles.texto}> Rodapé </Text>
        </View>

      </View>

    );
  }
}

// Estilos da aplicação
const styles = StyleSheet.create({

  main: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  body: {  
    backgroundColor: '#FFFFFF',
    flex: 1,  
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  header: {
    backgroundColor: '#22FD00',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    backgroundColor: '#23B60C',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize: 20,
    color: '#FFFFFF'
  },
  textoAmarelo: {
    fontSize: 80,
    color: '#E3FF00'
  }

});