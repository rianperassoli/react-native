import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { NavigationActions, StackActions} from 'react-navigation';

export default class Tela3 extends Component {

    static navigationOptions = ({navigation}) => ({
        title: 'Tela 3',

       
    });
  
    constructor(props){
      super(props);
      this.state = {}; 
      
      this.voltarTela = this.voltarTela.bind(this);
      this.telaPrincipal = this.telaPrincipal.bind(this);
     
    }

    voltarTela(){
        // Voltar para tela anterior
        this.props.navigation.goBack(); 
    }
    telaPrincipal(){
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'Home'})
            ]
        }));
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Text>Tela 3</Text>   
          <Button title="Voltar Tela" onPress={this.voltarTela}/>  
          <Button title="Ir Para Tela Principal" onPress={this.telaPrincipal}/>  
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