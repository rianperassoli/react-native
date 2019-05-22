import React, { Component } from "react";
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      location: null
    };

    this.findCoordinates = this.findCoordinates.bind(this);
  }

  findCoordinates(){
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        this.setState({ location });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.findCoordinates()}>
          <Text style={styles.welcome}>Find My Coords?</Text>
          <Text>Location: {this.state.location}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
