import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import DatePickerCustom from "./DatePickerCustom";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DatePickerCustom placeholder="Selecione uma data..." textStyle={} fieldStyle={} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  campo: {
    alignItems: "center",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 3,
    minWidth: 100
  },
  text: {
    padding: 10
  }
});
