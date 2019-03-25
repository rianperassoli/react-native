import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class TelaPrincipal extends Component {

    static navigationOptions = ({navigation}) => ({
        title: 'Home',

       
    });
  
    constructor(props){
      super(props);
      this.state = {};  
      
     this.irTela2 = this.irTela2.bind(this);
     
    }

    irTela2(){
        this.props.navigation.navigate('Tela2');
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Text>Tela Principal</Text>  
          <Button title="Ir para Tela 2" onPress={this.irTela2}/>   
        </View>
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
  });