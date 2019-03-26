import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
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
  }

  voltar() {
    this.props.navigation.goBack();
  }

  render() {
    return (

      <View style={styles.main}>

        <View style={styles.mainSpace}>

        </View>
        <Text>AboutScreen</Text>


        <LPButton style={styles.backButton} titulo="Voltar" onPress={() => { this.voltar() }} />
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
  },
  backButton: {
    flex: 1,
    backgroundColor: 'red'
  },
  mainSpace: {
    flex: 3,
    backgroundColor: 'green'
  }
});
