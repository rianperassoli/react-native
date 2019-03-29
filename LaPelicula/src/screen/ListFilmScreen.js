import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ImageBackground } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'lapelicula.db' });


//Component de Filmes
class ItemFilme extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.styles = StyleSheet.create({
      image: {
        height: 150
      },
      areaClick: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 10,
        paddingBottom: 10
      },
      description: {
        fontSize: 23,
        color: '#9304e0',
        fontWeight: 'bold'
      }
    });

    this.abrirTelaFilme = this.abrirTelaFilme.bind(this);
  }

  abrirTelaFilme() {
     alert("Filme: " + JSON.stringify(this.props.navigation));
    //this.props.navigation.navigate('Film');
  }

  render() {
    return (
      <View >
        <TouchableHighlight onPress={() => this.abrirTelaFilme()} underlayColor="blue" >

          <ImageBackground resizeMode="cover" source={{ uri: this.props.data.imagem }} style={this.styles.image}>
            <View style={this.styles.areaClick}>
              <Text style={this.styles.description}>{this.props.data.descricao}</Text>
            </View>
          </ImageBackground>
        </TouchableHighlight>
      </View>
    );
  }
}


export default class ListFilmScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'List Films',
    tabBarIcon: ({ focused, tintColor }) => {
      if (focused) {
        return (
          <Image source={require('../images/home_ativo.png')} style={styles.image} />
        );
      } else {
        return (
          <Image source={require('../images/home_inativo.png')} style={styles.image} />
        );
      }
    }
  });

  constructor(props) {

    super(props);
    this.state = { filmes: [] };

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
    return (

      <View style={styles.main}>

        <FlatList data={this.state.filmes}
          keyExtractor={item => item.codigo.toString()}
          renderItem={({ item }) => <ItemFilme data={item} />}
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
