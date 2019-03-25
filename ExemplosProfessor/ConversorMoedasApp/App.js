import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,

} from 'react-native';
import Conversor from './src/Conversor'

// https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=y

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        
    };

   
  }


  render() {
    return (
      <View style={styles.container}>
         <Conversor moedaA="USD" moedaB="BRL"/>
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
});
