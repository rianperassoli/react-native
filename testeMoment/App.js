import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Relogio from "./Relogio";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Relogio />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
