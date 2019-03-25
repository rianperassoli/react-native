import React, { Component } from 'react';
import { View, StyleSheet, Image, Button, TouchableOpacity, Text, TextInput }
  from 'react-native';

// componente para imagem
class MinhaImagem extends Component {
  // mesmo no componente é necessário escrever um render()
  render() {
    return (
      <Image source={require('./src/img/primeiroapp.png')}
        style={{
          width: parseInt(this.props.largura), height:
            parseInt(this.props.altura)
        }} />
    );
  }
}

// componente para botão
class Botao extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    // estilos
    this.styles = StyleSheet.create({
      botao: {
        width: 240,
        height: 50,
        borderWidth: parseInt(props.borda),
        borderColor: props.cor,
        borderRadius: 15
      },
      botaoArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
        //,
        //backgroundColor: 'red'
      },
      botaoTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
      }
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.botaoArea}>
          <Text style={this.styles.botaoTexto}>{this.props.titulo}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class App extends Component {

  constructor(props) {
    super(props);
    // definindo o objeto de estado(state)
    this.state = {
      texto: ''
    }

    // binding(amarração) da função do construtor com o da classe
    this.exibirTexto = this.exibirTexto.bind(this);
    this.clicar = this.clicar.bind(this);
  }

  // função para exibir o texto
  exibirTexto(texto) {
    let state = this.state;
    if (texto == '') {
      state.texto = 'Nenhum texto digitado!';
    } else {
      state.texto = texto;
    }
    // MUITO IMPORTANTE!!!!!
    this.setState(state);
  }

  // implementando função clicar
  clicar() {
    let state = this.state;

    alert(state.texto);
    state.texto = '';
    this.setState(state);
    this.textInput.clear();
  }

  // implementar o método render - dizendo como a tela se desenha
  render() {
    return (
      <View style={styles.principal}>
        {/* Testando views */}

        {/* utilizando props */}
        <MinhaImagem altura='80' largura='80' />
        <Button title='Clique Aqui!' onPress={this.clicar} />

        {/* botão customizado */}
        <Botao cor='red' titulo='Clique Aqui!' onPress={this.clicar} borda='2' />

        <TextInput style={[styles.textoInput, styles.textoInput1]}
          autoFocus={true}
          placeholder='Digite o texto ...'
          ref={input => { this.textInput = input }} onChangeText={
            (texto) =>
              this.exibirTexto(texto)}></TextInput>
        <Text style={styles.texto}>{this.state.texto}</Text>
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
  textoInput: {
    fontSize: 15,
    borderWidth: 1
  },
  textoInput1: {
    fontWeight: 'bold',
    borderColor: 'red'
  },
  texto: {
    fontSize: 40,
    color: 'blue',
    fontWeight: 'bold'
  }
});