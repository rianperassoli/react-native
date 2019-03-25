import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

// componente para botão customizado
export class LPButton extends Component {
    constructor(props) {
      super(props);
      this.state = {};
  
      // estilos
      this.styles = StyleSheet.create({
        botao: {
          height: 50,
          borderWidth: 2,
          borderColor: 'white',
          borderRadius: 15,          
          backgroundColor: '#80ffdf'
        },
        botaoArea: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center'
        },
        botaoTexto: {
          fontSize: 18,
          fontWeight: 'bold',
          color: 'white'
        }
      });
    }
  
    render() {
      return (
        <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
          <View style={this.styles.botaoArea}>
            <Text style={this.styles.botaoTexto}>{this.props.titulo}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  }