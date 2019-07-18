import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import CustomDialog from './CustomDialog';


class App extends Component {

  constructor() {
    super();

    this.state = {
      mostrarMensagem: false
    };
  }

  render() {
    return (

      <View style={{ flex: 1 }}>
        <Button title="Show Dialog" onPress={() => this.setState({ mostrarMensagem: true })} />

        <CustomDialog mostrarMensagem={this.state.mostrarMensagem} close={() => this.setState({ mostrarMensagem: false })} />
      </View>
    );
  }
};

export default App;
