import React, { Component } from 'react';
import { StyleSheet, Text, View, BackHandler } from 'react-native';

import { LPButton } from '../components/LPButton'




export default class HomeScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Página Principal"
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
    alignItems: 'center'
  },
});
