import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  ImageBackground
} from 'react-native';


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      filmes: []
    };

    // Api Url: https://sujeitoprogramador.com/rn-filmes/?api=filmes

    fetch('https://sujeitoprogramador.com/rn-filmes/?api=filmes')
    .then((r)=> r.json())
    .then((json) =>{
        let state = this.state;
        state.filmes = json;
        this.setState(state);
    });
    

  }

  render() {
    return (
      <View style={styles.container}>
          <View style={{height: 80, backgroundColor: '#007F98', justifyContent: 'center'}}> 
              <Text style={{color: '#FFFFFF', fontSize: 28, fontWeight: 'bold', textAlign: 'center'}}>Filmes Recomendados</Text>
          </View>

          <FlatList data={this.state.filmes}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => <Filmes data={item} />}
          />

      </View>
    );
  }
}

//Component de Filmes
class Filmes extends Component{
  render(){
    return(
      <View style={styles.container}>
        <TouchableHighlight onPress={() => alert("Filme: " + this.props.data.nome)} underlayColor="blue" >
        
          <ImageBackground  resizeMode="cover" source={{uri: this.props.data.foto }} style={{height: 150}}>
            <View style={{flex:1, 
                          alignItems: 'flex-start', 
                          justifyContent:'flex-end', 
                          paddingLeft: 10, 
                          paddingBottom: 10}}>
                <Text style={{fontSize: 23, color: '#FFFFFF', fontWeight: 'bold'}}>{this.props.data.nome}</Text>
            </View>
          </ImageBackground>

        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
