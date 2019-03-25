import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { LPButton } from '../components/LPButton';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'lapelicula.db' });

export default class FilmScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Add Film',
    tabBarIcon: ({ focused, tintColor }) => {
      if (focused) {
        return (
          <Image source={require('../images/cadastrar_ativo.png')}
            style={styles.icon} />
        );
      } else {
        return (
          <Image source={require('../images/cadastrar_inativo.png')}
            style={styles.icon} />
        );
      }
    }
  });

  componentDidMount() {
    if (typeof this.props.navigation.state.params !== "undefined") {
      this.setState({
        uri: this.props.navigation.state.params.imguri
      })
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      descricao: '',
      uri: null
    };

    this.abrirCamera = this.abrirCamera.bind(this);
    this.salvar = this.salvar.bind(this);
  }


  abrirCamera() {

    this.props.navigation.navigate('Camera');
  }

  salvar() {

    db.transaction(tx => {
      tx.executeSql('INSERT INTO filme(descricao, imagem) values (?, ?)', [this.state.descricao, this.state.uri]);
    });

    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.areaFoto}>

          <View style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
            <Image source={{ uri: this.state.uri }} style={{ backgroundColor: 'blue', justifyContent: 'center', alignItems: 'flex-start', width: 150, height: 150, marginBottom: 40 }} />
          </View>

          <View style={{ width: 50, heigth: 50 }}>
            <TouchableOpacity onPress={() => { this.abrirCamera() }}>
              <View>
                <Image source={require('../images/captura.png')} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.areaInput}>
          <TextInput style={styles.inputText}
            multiline={true} placeholder='Descrição'
            onChangeText={(valor) => this.setState({ descricao: valor })} />
        </View>

        <View style={styles.areaBotao}>
          <View style={{ flex: 1 }}>
            <LPButton titulo='Salvar' onPress={() => this.salvar()} />
          </View>

          <View style={{ flex: 1 }}>
            <LPButton titulo='Cancelar'
              onPress={() => this.props.navigation.navigate('Home')} />
          </View>
        </View>
      </View >
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
  inputText: {
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'gray'
  },
  areaBotao: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center'
  },
  areaInput: {
    width: '98%'
  },
  areaFoto: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 26,
    height: 26
  }
});