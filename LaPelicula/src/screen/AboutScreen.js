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
    this.getText = this.getText.bind(this);
  }

  voltar() {
    this.props.navigation.goBack();
  }
  
  getText() {
    return `  Esta é uma aplicação com o objetivo de armazenar filmes e fazer de certa forma um histórico dos seus títulos preferidos.
            
Desenvolvido por Rian Perassoli
Versão: 1.0.2
`;
  }

  render() {
    return (

      <View style={styles.main}>

        <View style={styles.mainSpaceHead}>

          <Image
            style={styles.logo}
            source={require('../images/logo_512.png')} />

          <Text style={styles.title}> La Película </Text>

        </View>

        <View style={styles.mainSpaceBody}>

          <Text style={styles.description} > {this.getText()} </Text>

        </View>



        <LPButton titulo="Voltar" onPress={() => { this.voltar() }} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,    
    backgroundColor: '#FFFFFF'
  },
  image: {
    width: 26,
    height: 26,
  },
  mainSpaceHead: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainSpaceBody: {
    flex: 1,
    backgroundColor: '#D8D8D8',
    margin: 20,
    padding: 20,
    borderRadius: 15,
  },
  logo: {
    width: 250,
    height: 250
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 15,
    fontStyle: 'italic'
  }
});
