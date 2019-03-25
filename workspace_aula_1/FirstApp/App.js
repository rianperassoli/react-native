import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class App extends Component {

  render() {

    let nome = 'Rian Perassoli'

    return (

      <View style={{
        backgroundColor: 'gray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <Text style={{
          color: 'black',
          fontSize: 48,
          fontWeight: 'bold'
        }}>
          Meu app
        </Text>

        <Image source={ require('./src/img/phone.png') }>
        </Image>

        <Text style={{
          color: 'red',
          fontSize: 30,
          fontWeight: 'bold'
        }}>
          { nome }
        </Text>

      </View >

    );
  }

}

