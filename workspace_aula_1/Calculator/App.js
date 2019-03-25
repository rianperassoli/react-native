import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';



class Botao extends Component {

  constructor(props) {
    super(props);

    this.state = {}

    this.styles = StyleSheet.create({
      botao: {
        width: 150,
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
      resultado: '',
      valor1: '',
      valor2: ''
    }

    //amarra a função do constructor com a da classe
    this.limpar = this.limpar.bind(this)
    this.calcular = this.calcular.bind(this)
  }

  setValor1(valor) {
    this.state.valor1 = parseInt(valor);
  }

  setValor2(valor) {
    this.state.valor2 = parseInt(valor);
  }

  calcular() {
    let state = this.state;

    state.resultado = state.valor1 + state.valor2;

    this.setState(state);
  }

  limpar() {
    let state = this.state;

    state.valor1 = '';
    state.valor2 = '';
    state.resultado = '';
 
    this.setState(state);
  }

  render() {
    return (

      <View style={styles.main}>

        <View style={styles.headerFooter}>
          <Text style={styles.textoHeader}>Calculator</Text>
        </View>

        <View style={styles.body}>

          <View style={styles.viewValues}>

            <TextInput
              style={styles.textInput}
              autofocus='true'
              placeholder='Digite o primeiro valor...'
              onChangeText={texto => this.setValor1(texto)}
              value={this.state.valor1}>
            </TextInput>

            <TextInput
              style={styles.textoInput}
              placeholder='Digite o segundo valor...'      
              onChangeText={texto => this.setValor2(texto)}
              value={this.state.valor2}>
            </TextInput>

          </View>


          <View style={styles.viewButtons}>
            <Botao
              corBorda='gray'
              tamanhoBorda='2'
              corTexto='red'
              label='Calcular'
              click={this.calcular}>
            </Botao>

            <Botao
              corBorda='gray'
              tamanhoBorda='2'
              corTexto='red'
              label='Limpar'
              click={this.limpar}>
            </Botao>
          </View>

          <View style={styles.viewResult}>

            <Text style={styles.textResult}>{this.state.resultado}</Text>

          </View>

        </View>

        <View style={styles.headerFooter}></View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  headerFooter: {
    backgroundColor: '#B4B4B4',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textHeader: {
    fontSize: 20,
    color: '#FFFFFF'
  },
  body: {
    backgroundColor: '#F4F4F4',
    flex: 10
  },
  viewValues: {
    flex: 5
  },
  viewButtons: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  viewResult: {
    flex: 3
  },
  textResult: {
    fontSize: 80,
    color: '#3C9012'
  }
});