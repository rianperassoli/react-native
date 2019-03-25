import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class Tela2 extends Component {

    static navigationOptions = ({navigation}) => ({
        title: 'Tela 2',

       
    });
  
    constructor(props){
      super(props);
      this.state = {};  
     
      this.irTela3 = this.irTela3.bind(this);
    }

    
    irTela3(){
        this.props.navigation.navigate('Tela3');
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Text>Tela 2</Text>
          <Button title="Ir para Tela 3" onPress={this.irTela3}/>       
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