import React, { Component } from 'react';
import { StyleSheet, Text, View, BackHandler, Image } from 'react-native';

import { LPButton } from '../components/LPButton'




export default class HomeScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused, tintColor }) => {
      if (focused) {
        return (
          <Image source={require('../images/home_ativo.png')} style={styles.image} />
        );
      } else {
        return (
          <Image source={require('../images/home_inativo.png')} style={styles.image} />
        );
      }
    }
  });

  constructor(props) {
    super(props);

    this.state = {};

    this.proxima = this.proxima.bind(this);
    this.sair = this.sair.bind(this);
  }

  proxima() {
    this.props.navigation.navigate('Login');
  }

  sair() {
    BackHandler.exitApp();
  }

  render() {
    return (

      <View style={styles.main}>

        <Text>HomeScreen</Text>

        <LPButton titulo="1" onPress={() => { this.proxima() }} />

        <LPButton titulo="Sair" onPress={() => { this.sair() }} />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  image: {
    width: 26,
    height: 26,
  }
});
