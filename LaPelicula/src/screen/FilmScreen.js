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
    alert('sad');
    const { navigation } = this.props;

    if (typeof navigation.state.params !== "undefined") {
      this.setState({
        uri: navigation.state.params.imguri
      })
    }

    const codigo = navigation.getParam('codigo', null);
    const descricao = navigation.getParam('descricao', '');
    const imagem = navigation.getParam('imagem', null);
    onSaved = navigation.getParam('onSaved');

    this.setState({ codigo, descricao, imagem, onSaved });
  }

  componentWillReceiveProps(nextProps){
    alert('sad22');
    const { navigation } = nextProps;

    if (typeof navigation.state.params !== "undefined") {
      this.setState({
        uri: navigation.state.params.imguri
      })
    }

    const codigo = navigation.getParam('codigo', null);
    const descricao = navigation.getParam('descricao', '');
    const imagem = navigation.getParam('imagem', null);
    onSaved = navigation.getParam('onSaved');

    this.setState({ codigo, descricao, imagem, onSaved });
  }

  constructor(props) {
    super(props);

    this.state = { codigo: null, descricao: '', imagem: null, onSaved: null };

    this.abrirCamera = this.abrirCamera.bind(this);
    this.salvar = this.salvar.bind(this);
    this.atualizar = this.atualizar.bind(this);
    this.salvarClick = this.salvarClick.bind(this);
  }

  abrirCamera() {

    this.props.navigation.navigate('Camera', this.state);
  }

  salvarClick() {
    this.state.codigo ? this.atualizar() : this.salvar();    

    this.state.onSaved();

    this.setState({ codigo: null, descricao: '', imagem: null, onSaved: null });

    this.props.navigation.navigate('Home');
  }

  salvar() {
    db.transaction(tx => {
      tx.executeSql('INSERT INTO filme(descricao, imagem) values (?, ?)', [this.state.descricao, this.state.imagem]);
    });
  }

  atualizar() {

    db.transaction(tx => {
      tx.executeSql('UPDATE filme set descricao=?, imagem=? WHERE codigo = ?', [this.state.descricao, this.state.imagem, this.state.codigo]);
    });

    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.areaFoto}>

          <View style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
            <Image source={{ uri: this.state.imagem }} style={{ backgroundColor: 'blue', justifyContent: 'center', alignItems: 'flex-start', width: 150, height: 150, marginBottom: 40 }} />
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
            value={this.state.descricao}
            onChangeText={(valor) => this.setState({ descricao: valor })} />
        </View>

        <View style={styles.areaBotao}>

          <View style={{ flex: 1 }}>

            <LPButton
              titulo='Salvar'
              onPress={() => this.salvarClick()} />

          </View>

          <View style={{ flex: 1 }}>

            <LPButton
              titulo='Cancelar'
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