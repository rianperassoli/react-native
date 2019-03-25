import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FilmScreen extends Component {
  render() {
    return (

      <View style={styles.main}>

        <Text>FilmScreen</Text>       

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
