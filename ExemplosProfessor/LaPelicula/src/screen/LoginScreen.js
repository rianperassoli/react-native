import React, { Component } from 'react';
import { StyleSheet, TextInput, View, AsyncStorage, Alert } from 'react-native';
import { LPButton } from '../component/LPButton';

export default class LoginScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Login',
  });

  constructor(props) {
    super(props);
    this.state = {
      login: '',
      senha: ''
    }

    this.efetuarLogin = this.efetuarLogin.bind(this);
    this.setLogado = this.setLogado.bind(this);
    this.initLogin = this.initLogin.bind(this);

    this.initLogin();
  }

  efetuarLogin = async () => {
    let state = this.state;
    let login = '-1';
    await AsyncStorage.getItem('login').then((value) => {
      login = value;
    });
    let senha = '-1';
    await AsyncStorage.getItem('senha').then((value) => {
      senha = value;
    });
    if (state.login == login &&
      state.senha == senha) {
      this.setLogado();
      this.props.navigation.navigate('App');
    } else {
      // Works on both iOS and Android
      Alert.alert(
        'Login',
        'Usuário ou senha inválidos!',
        [
          { text: 'OK' },
        ],
        { cancelable: false },
      );
    }
  }

  initLogin() {
    AsyncStorage.setItem('login', '1');
    AsyncStorage.setItem('senha', '2');
    AsyncStorage.setItem('logado', 'false');
  }

  setLogado() {
    AsyncStorage.setItem('logado', 'true');
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputText} autoFocus={true} placeholder='Login' onChangeText={(value) => this.setState({ login: value })} />
        <TextInput style={styles.inputText} secureTextEntry={true} placeholder='Senha' onChangeText={(value) => this.setState({ senha: value })} />
        <View style={{ margin: 7 }} />
        <LPButton
          onPress={this.efetuarLogin}
          titulo="Login"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 15,
    borderColor: '#F5FCFF'
  },
  inputText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    margin: 10
  }
});