import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { LPButton } from '../components/LPButton';

export default class LoginScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Página de Login",
    headerStyle:{
      backgroundColor:'blue'
    },
    headerTintColor: 'white'
  });

  constructor(props) {
    super(props);

    this.state = {};

    this.proxima = this.proxima.bind(this);
  }

  proxima() {
    this.props.navigation.navigate('About');
  }

  render() {
    return (

      <View style={styles.main}>

        <Text>LoginScreen</Text>

        <LPButton titulo="1" onPress={() => { this.proxima() }} />

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
