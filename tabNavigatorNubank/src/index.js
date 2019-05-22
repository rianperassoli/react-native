import React, { Component } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import { BottomNavigator } from "./components";

class App extends Component {
  render() {
    return (
      <View style={styles.homeContainer}>
        <StatusBar barStyle="light-content" />
        <View style={styles.swiperContainer}>
          <View style={styles.swiper} />
        </View>
        <BottomNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#6d2177"
  },
  swiperContainer: {
    flex: 1,
    marginLeft: 25,
    marginRight: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  swiper: {
    flex: 1,
    height: 350,
    backgroundColor: "#FFF",
    borderRadius: 5
  }
});

export default App;
