import React, { Component } from "react";
import { StyleSheet, View, Button, Alert } from "react-native";

export default class App extends Component {
  getDataUsingGet() {
    fetch("http://serverponto-env.8a2uu83kyh.us-east-2.elasticbeanstalk.com/funcionario", {
      method: "GET"
    })
      .then(response => response.json())
      .then(responseJson => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      .catch(error => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  }

  getDataUsingPost() {
    var dataToSend = { cracha: 256, dataHora: new Date().toISOString() };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch("http://serverponto-env.8a2uu83kyh.us-east-2.elasticbeanstalk.com/registroponto/add", {
      method: "POST",
      body: formBody,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      .catch(error => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <Button title="Get Funcionários" onPress={this.getDataUsingGet} />
        <Button title="Insere funcionário" onPress={this.getDataUsingPost} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10
  }
});