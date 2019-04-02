import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { openDatabase } from 'react-native-sqlite-storage';
import ItemFilme from './ItemFilme';

var db = openDatabase({ name: 'lapelicula.db' });

export default class ListFilmScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'List Films',
    tabBarIcon: ({ focused, tintColor }) => {
      if (focused) {
        return (
          <Image source={require('../../images/home_ativo.png')} style={styles.image} />
        );
      } else {
        return (
          <Image source={require('../../images/home_inativo.png')} style={styles.image} />
        );
      }
    }
  });

  constructor(props) {

    super(props);
    this.state = { filmes: [] };

    this.buscarFilmes = this.buscarFilmes.bind(this);
  }

  componentDidMount() {
    this.buscarFilmes();
  }

  componentWillReceiveProps() {
    this.buscarFilmes();
  }

  buscarFilmes() {
    db.transaction(tx => {
      tx.executeSql('select * from filme order by descricao', [],
        (tx, res) => {
          var temp = [];

          for (let i = 0; i < res.rows.length; i++) {
            temp.push(res.rows.item(i));
          }

          this.setState({ filmes: temp });
        });
    });
  }

  render() {

    const { navigation } = this.props;

    return (

      <View style={styles.main}>

        <FlatList data={this.state.filmes}
          keyExtractor={item => item.codigo.toString()}
          renderItem={({ item }) => (
            <ItemFilme
              data={item}
              navigation={navigation}
              onSaved={() => this.buscarFilmes()}
              onDeleted={() => this.buscarFilmes()}
            />
          )}
        />

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
    height: 26
  }
});
