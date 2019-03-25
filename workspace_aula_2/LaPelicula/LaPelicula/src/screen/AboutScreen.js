import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { LPButton } from '../components/LPButton';


export default class AboutScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  constructor(props) {
    super(props);

    this.state = {};

    this.voltar = this.voltar.bind(this);
    this.home = this.home.bind(this);
  }

  voltar() {
    this.props.navigation.goBack();
  }

  home() {
    this.props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Home' })
        ]
      })
    );
  }

  render() {
    return (

      <View style={styles.main}>

        <Text>AboutScreen</Text>
        <LPButton titulo="Voltar" onPress={() => { this.voltar() }} />
        <LPButton titulo="Home" onPress={() => { this.home() }} />
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
