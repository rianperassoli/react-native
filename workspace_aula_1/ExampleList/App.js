import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, Platform, SectionList, Alert } from 'react-native';



class BotaoADD extends Component {

  constructor(props) {
    super(props);

    this.state = {}

    this.styles = StyleSheet.create({
      botao: {
        width: 75,
        height: 40,
        borderWidth: parseInt(props.tamanhoBorda),
        borderColor: props.corBorda,
        borderRadius: 7
      },
      botaoArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      botaoTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: props.corTexto
      }
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.click}>

        <View style={this.styles.botaoArea}>
          <Text style={this.styles.botaoTexto}>{this.props.label}</Text>
        </View>

      </TouchableOpacity>
    );
  }
}


export default class App extends Component {

  GetSectionListItem = (item) => {
    Alert.alert(item)
  }


  constructor(props) {
    super(props);

    //definindo state
    this.state = {
      text: '',
      listData: ['']
    }

    this.addToList = this.addToList.bind(this)
  }

  setText(text) {
    this.state.text = text;
  }

  addToList() {
    alert(this.state.text);

    this.state.listData.push(this.state.text);
  }


  render() {
    return (

      <View style={styles.main}>

        <View style={styles.headerFooter}>
          <Text style={styles.textHeader}>Example List</Text>
        </View>

        <View style={styles.body}>

          <View style={styles.viewFields}>

            <TextInput
              style={styles.textInput}
              autofocus='true'
              placeholder='Digite o primeiro valor...'
              onChangeText={text => this.setText(text)} >
            </TextInput>

            <BotaoADD
              corBorda='#00d2ff'
              tamanhoBorda='2'
              corTexto='#00d2ff'
              label='Add'
              click={this.addToList}>
            </BotaoADD>

          </View>

          <View style={styles.viewList}>
           
          </View>

        </View>

        <View style={styles.headerFooter}></View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  headerFooter: {
    backgroundColor: '#B4B4B4',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textHeader: {
    fontSize: 20,
    color: '#FFFFFF'
  },
  body: {
    backgroundColor: '#F4F4F4',
    flex: 10
  },
  viewFields: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  viewList: {
    flex: 9,
    backgroundColor: '#F90A0A'
  }
});