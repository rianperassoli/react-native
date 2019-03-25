import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, TextInput } from 'react-native';


class MinhaImagem extends Component {
  render() {
    return (
      <Image style={{
        height: parseInt(this.props.altura),
        width: parseInt(this.props.largura)
      }}
        source={require('./src/img/imagem.png')} />
    );
  }
}

class Botao extends Component {

  constructor(props) {
    super(props);

    this.state = {}

    this.styles = StyleSheet.create({
      botao: {
        width: 240,
        height: 50,
        borderWidth: parseInt(props.tamanhoBorda),
        borderColor: props.corBorda,
        borderRadius: 7
      },
      botaoArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      botaoTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: props.corTexto
      }
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.click}>

        <View style={this.styles.botaoArea}>
          <Text style={this.styles.botaoTexto}>{this.props.label}</Text>
        </View>

      </TouchableOpacity>
    );
  }
}


export default class App extends Component {

  constructor(props) {
    super(props);

    //definindo state
    this.state = {
      textoTela: ''
    }

    //amarra a função do constructor com a da classe
    this.exibirTexto = this.exibirTexto.bind(this)
    this.clicar = this.clicar.bind(this)
  }


  exibirTexto(texto){
    let state = this.state;

    if (texto == '') {
      state.textoTela = 'Nada a declarar';
    } else {
      state.textoTela = texto;
    }

    //atualiza o state
    this.setState(state);
  }


  clicar() {
    alert('clique');
  }

  render() {
    return (

      <View style={styles.main}>

        <MinhaImagem altura='200' largura='200'></MinhaImagem>

        <Botao
          corBorda='gray'
          tamanhoBorda='2'
          corTexto='red'
          label='Clique Aqui'
          click={this.clicar}></Botao>

        <TextInput
          style={styles.textoInput}
          autofocus='true'        
          placeholder='Digita algo tchê..'
          onChangeText={texto => this.exibirTexto(texto)}>
        </TextInput>

        <Text style={styles.texto}> {this.state.textoTela} </Text>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFF',
    flex: 1
  },
  textoInput: {
    fontSize: 20,
    borderWidth: 1
  },
  texto: {
    fontSize: 40,
    color: 'blue',
    fontWeight: 'bold'
  }
});