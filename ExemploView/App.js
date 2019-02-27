import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {
  // implementar o método render - dizendo como a tela se desenha
  render() {
    return (
      <View style={styles.principal}>
        {/* Testando views */}

        {/* header */}
        <View style={styles.header}>
          <Text style={styles.texto}>Cabeçalho</Text>
        </View>

        {/* corpo */}
        <View style={styles.body}>
          {/* adicionar um texto, com tamanho 80, amarelo, 
          alinha no final(embaixo) e na direita */}
          <Text style={styles.textoCorpo}>Texto</Text>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Text style={styles.texto}>Rodapé</Text>
        </View>
      </View>
    );
  }
}

// estilos da aplicação
const styles = StyleSheet.create({
  principal: {
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
    backgroundColor: 'green', 
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    backgroundColor: 'blue', 
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize: 20, 
    color: 'white'
  },
  textoCorpo: {
    fontSize: 80,
    color: 'yellow'
  }
});



