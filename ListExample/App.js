import React, { Component } from 'react';
import { FlatList, Text, View, TextInput, Button, ScrollView } from 'react-native';

import styles from './src/styles/app-style';

export default class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      text: "",
      items: []
    }

    this.insertItem = this.insertItem.bind(this);
    this.renderItemList = this.renderItemList.bind(this);
  }

  renderItemList(item) {
    return (
      <Text style={[styles.row, styles.listRow]}>
        {item.item.description}
      </Text>
    );
  }

  validarItem() {    
    return this.state.text !== "";
  }

  insertItem() {

    if (this.validarItem()) {
      let newItem = {
        key: this.state.items.length.toString(),
        description: this.state.text
      }

      let items = this.state.items;
      items.push(newItem);
      this.setState({ items });

      let text = "";
      this.setState({ text });

    } else {

      alert('Por favor, insira um texto válido');
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header} >

          <Text style={[styles.textHeader, styles.row]}>
            List Example
          </Text>

        </View>

        <View style={styles.inputView}>

          <TextInput
            style={styles.inputItem}
            placeholder="Digite um item para adicionar a lista..."
            onChangeText={(text) => { this.setState({ text }) }}
            value={this.state.text} />

          <Button
            title="Add item"
            style={styles.buttonAdd}
            onPress={this.insertItem} />

        </View>

        <FlatList
          style={styles.list}
          data={this.state.items}
          renderItem={this.renderItemList}
          extraData={this.state} />

        <View style={styles.footer} >

          <Text style={[styles.textFooter]}>
            Developed by Rian Perassoli
          </Text>

        </View>

      </View>
    );
  }
}
