import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LPButton } from '../component/LPButton';
import { StackActions, NavigationActions } from
  'react-navigation';

export default class SobreScreen extends Component {
  // configurando opções de navegação
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Sobre',
    tabBarIcon: ({ focused, tintColor }) => {
      if (focused) {
        return (
          <Image source={require('../img/cadastrar_ativo.png')}
            style={{ width: 26, height: 26 }} />
        );
      } else {
        return (
          <Image source={require('../img/cadastrar_inativo.png')}
            style={{ width: 26, height: 26 }} />
        );
      }
    }
  });

  constructor(props) {
    super(props);
    this.state = {};

    this.voltar = this.voltar.bind(this);
    this.telaPrincipal = this.telaPrincipal.bind(this);
  }

  voltar() {
    // passando para próxima tela        
    this.props.navigation.goBack();
  }

  telaPrincipal() {
    this.props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: 'Home'
          })
        ]
      })
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Tela Sobre</Text>
        <LPButton titulo="Voltar"
          onPress={() => { this.voltar() }} />
        <LPButton titulo="Tela Principal"
          onPress={() => { this.telaPrincipal() }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});