import React, { Component } from 'react'
import {
  View,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  AsyncStorage
} from 'react-native';

import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';

import AboutScreen from './src/screen/AboutScreen';
import LoginScreen from './src/screen/LoginScreen';
import ListFilmScreen from './src/screen/ListFilmScreen';
import FilmScreen from './src/screen/FilmScreen';
import CameraScreen from './src/screen/CameraScreen';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({
  name: 'lapelicula.db'
});


class LoginLoadingScreen extends Component {
  constructor(props) {
    super(props);

    this.bootstrapAsync = this.bootstrapAsync.bind(this);

    this.bootstrapAsync();

    db.transaction(function (tx) {
      tx.executeSql('select name from sqlite_master where type = ? and name = ? ', ['table', 'filme'],
        function (tx, res) {

          if (res.rows.length == 0) {
            tx.executeSql('create table filme (codigo INTEGER PRIMARY KEY AUTOINCREMENT, descricao VARCHAR(200), imagem BLOB)', []);
            tx.executeSql('insert into filme(descricao) values(?)', ['filme 01']);
            tx.executeSql('insert into filme(descricao) values(?)', ['filme 02']);
            tx.executeSql('insert into filme(descricao) values(?)', ['filme 03']);
          }
        }
      );
    });
  }

  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync() {
    let logado = 'true';//mudar para false para pedir login
    AsyncStorage.getItem('logado').then((value) => {
      logado = value;
    });

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(logado == 'true' ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const AppTab = createBottomTabNavigator({

  Home: { screen: ListFilmScreen },
  Film: { screen: FilmScreen },
  About: { screen: AboutScreen },

}, {
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#CCCCCC',
      style: {
        backgroundColor: '#570076'
      },
      indicatorStyle: {
        backgroundColor: null
      }
    },
  }
);

const AppStack = createStackNavigator({
  Login: { screen: LoginScreen },
  Camera: { screen: CameraScreen },
});

const AppSwitch = createSwitchNavigator({
  LoginLoading: LoginLoadingScreen,
  App: AppTab,
  Auth: AppStack
},
  {
    initialRouteName: 'LoginLoading'
  }
);


const App = createAppContainer(AppSwitch);

export default App;


/*

Entregar, por e-mail, até o dia 01/04 as seguintes implementações no projeto LaPelicula:
1) Implementar a tela do sobre;
2) Implementar o editar de um filme;
3) Implementar o excluir de um filme;
4) Implementar a recuperar via http dados de um filme;
5) Implementar uma forma do usuário escolher a ordenação da lista.

*/