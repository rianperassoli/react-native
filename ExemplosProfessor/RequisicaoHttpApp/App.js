import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nutri: [],
      loading: true
    };

    // Url da Api: https://sujeitoprogramador.com/rn-api/?path=posts
    fetch('https://sujeitoprogramador.com/rn-api/?path=posts')
    .then((r) => r.json()) 
    .then((json) => {
        let state = this.state;
        state.loading = false;
        state.nutri = json;
        this.setState(state);
    }); 



  }

  render() {

    if(this.state.loading){
      return(
        <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
          <Text style={{fontSize:18}}>Carregando...</Text>
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
            <FlatList data={this.state.nutri}
                      keyExtractor={item => item.id.toString()}
                      renderItem={({item}) => <Nutri data={item} /> }
            />
        </View>
      );
    }
  }
}

//Component Nutri
class Nutri extends Component{
  render(){
    return(
      <View>
        <View style={styles.card}>
          <Image resizeMode="cover" source={{uri: this.props.data.capa}} style={styles.capa}/>
          <Text style={[styles.titulo, styles.espaco]}>{this.props.data.titulo}</Text>
          <Text style={[styles.subtitulo, styles.espaco]}>{this.props.data.subtitulo}</Text>
          <Text style={[styles.categoria, styles.espaco]}>Categoria:</Text>
          <View style={styles.areaCategoria}>
            <Text style={styles.categoriaNome}>{this.props.data.categoria.toUpperCase()}</Text>
            <View style={styles.areaBtn}>
              <TouchableOpacity style={styles.btnLeia}>
                <Text style={styles.btnTexto}>LEIA MAIS</Text>
              </TouchableOpacity>
            </View>
          </View>


        </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  capa:{
    height: 250
  },
  card:{
    shadowColor: '#000000',
    backgroundColor: '#FFFFFF',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 2,
    borderRadius: 5,
    elevation: 3
  },
  espaco:{
    margin: 10
  },
  titulo:{
    fontSize: 22,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  subtitulo:{
    fontSize: 17,
    color: '#000000',
    textAlign: 'justify'
  },
  categoria:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000'
  },
  areaCategoria:{
    flex:1,
    flexDirection: 'row',
    height: 40
  },
  categoriaNome:{
    fontSize: 16,
    color: '#488aff',
    marginLeft: 10,
    marginBottom: 10
  },
  btnLeia:{
    height: 35,
    backgroundColor: '#488aff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: -5,
    padding: 10
  },
  btnTexto:{
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  areaBtn:{
    flex:1,
    alignItems: 'flex-end'
  }
});
