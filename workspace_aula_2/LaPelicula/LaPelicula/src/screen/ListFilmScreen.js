import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class ListFilmScreen extends Component {
  render() {
    return (

      <View style={styles.main}>

        <Text>ListFilmScreen</Text>       

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
