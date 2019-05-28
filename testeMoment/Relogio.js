import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";
import "moment/locale/pt-br";

class Relogio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      hora: "",      
    };

  }

  render() {
    setTimeout(() => {
      
      this.setState({
        data: moment()
        .utcOffset("-0300")
        .format("LL"),
        hora: moment()
        .utcOffset("-0300")
        .format("HH:mm:ss"),
      });
    }, 1000);

    return (
      <View style={styles.container}>
        <Text style={styles.data}>{this.state.data}</Text>
        <Text style={styles.hora}>{this.state.hora}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    minHeight: 80,
    minWidth: 200
  },
  data: {
    fontSize: 20
  },
  hora: {
    fontSize: 26,
    fontWeight: "bold"
  }
});

export default Relogio;
