import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { LPButton } from '../components/LPButton';


export default class AboutScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'About',
    tabBarIcon: ({ focused, tintColor }) => {
      if (focused) {
        return (
          <Image source={require('../images/cadastrar_ativo.png')} style={styles.image} />
        );
      } else {
        return (
          <Image source={require('../images/cadastrar_inativo.png')} style={styles.image} />
        );
      }
    }
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
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  image: {
    width: 26,
    height: 26,
  }
});
