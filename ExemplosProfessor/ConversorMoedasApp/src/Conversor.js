import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Keyboard
} from 'react-native';

// https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=y

export default class Conversor extends Component {

  constructor(props){
    super(props);
    this.state = {
      moedaA: props.moedaA,
      moedaB: props.moedaB,
      moedaB_valor: 0,
      valorConvertido: 0
    };

    this.converter = this.converter.bind(this);
  }

  converter(){
    let de_para = this.state.moedaA + '_' + this.state.moedaB
    this.url = 'https://free.currencyconverterapi.com/api/v6/convert?q=USD_BRL&compact=ultra&apiKey=6f61d25939ad63f3566b'

    fetch(this.url)
    .then((response) => response.json())
    .then((rjson) => {
      alert(rjson["USD_BRL"].val);
      alert(JSON.stringify(rjson));
      let cotacao = rjson[de_para].val;
      let state = this.state;
      state.valorConvertido = (cotacao * parseFloat(this.state.moedaB_valor)).toFixed(2);
      this.setState(state);

    })

    Keyboard.dismiss();




  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.titulo}>USD Para BRL</Text>

          <TextInput  style={styles.areaInput} underlineColorAndroid="transparent" placeholder="USD"
                      keyboardType="numeric" onChangeText={(moedaB_valor)=> this.setState({moedaB_valor})}
          />

          <TouchableHighlight  style={styles.botaoArea} onPress={this.converter}>
            <Text  style={styles.botaoTexto}>Converter</Text>
          </TouchableHighlight>

          <Text style={styles.valorConvertido}>{ (this.state.valorConvertido == 0) ? '' : this.state.valorConvertido }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  },
  areaInput:{
    width: 280,
    height: 45,
    backgroundColor: '#CCC',
    marginTop: 15,
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    borderRadius: 5
  },
  botaoArea:{
    width: 150,
    height:45,
    backgroundColor: '#FF0000',
    borderRadius: 5,
    justifyContent:'center',
    alignItems:'center',
    marginTop: 15
  },
  botaoTexto:{
    fontSize:20,
    color: '#FFF'
  },
  valorConvertido:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginTop:15
  }
});
