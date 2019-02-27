import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, Button } from 'react-native';


type Props = {};
export default class App extends Component<Props> {

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
      <Text style={styles.row}>{item.item.description}</Text>
    );
  }

  insertItem() {
    let newItem = {
      key: this.state.items.length.toString(),
      description: this.state.text
    }

    let items = this.state.items;
    items.push(newItem);
    this.setState({ items });

    let text = "";
    this.setState({ text });

  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.inputView}>

          <TextInput
            style={styles.inputItem}
            onChangeText={(text) => { this.setState({ text }) }}
            value={this.state.text} />

          <Button
            title="Add item"
            onPress={this.insertItem} />

        </View>

        <FlatList
          data={this.state.items}
          renderItem={this.renderItemList}
          extraData={this.state} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    fontSize: 18,
    marginBottom: 2,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#DDD'
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputItem: {
    backgroundColor: '#FFF',
    borderColor: '#DDD',
    borderWidth: 3,
    padding: 10,
    margin: 10,
    flex: 1
  },
});
