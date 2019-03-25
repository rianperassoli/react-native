import React, { Component } from 'react';
import { View, Text, StyleSheet, BackHandler, Image } 
from 'react-native';
import {LPButton} from '../component/LPButton';

export default class HomeScreen extends Component {
    // configurando opções de navegação
    static navigationOptions = ({navigation}) => ({
       tabBarLabel: 'Home',
       tabBarIcon: ({focused, tintColor}) =>
       {
          if (focused) {
            return (
                <Image source={require('../img/home_ativo.png')}
                style={{width: 26, height: 26}}/>                
            );
          } else {
            return (
              <Image source={require('../img/home_inativo.png')}
              style={{width: 26, height: 26}}/>                
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
        // passando para próxima tela        
        this.props.navigation.navigate('Login');
    }

    sair() {
        // sair do app
        BackHandler.exitApp();
    }

  render() {
    return (
      <View style={styles.container}>
        <Text>Tela Principal</Text> 
        <LPButton titulo="Próxima tela"
        onPress={() => { this.proxima() }} />
        <LPButton titulo="Sair"
        onPress={() => { this.sair() }} />
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