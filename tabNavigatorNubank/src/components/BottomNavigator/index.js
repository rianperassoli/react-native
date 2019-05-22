import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity
} from "react-native";

import {
  indicator,
  deposit,
  transfer,
  ajust,
  card,
  payment,
  block
} from "../../assets/home";

class BottomNavigator extends Component {
  state = {
    menuItems: [
      { name: "Indicar amigos", source: indicator },
      { name: "Depositar", source: deposit },
      { name: "Transferir", source: transfer },
      { name: "Ajustar Limite", source: ajust },
      { name: "Cartão virtual", source: card },
      { name: "Pagar", source: payment },
      { name: "Bloquear cartão", source: block }
    ]
  };

  renderMenusItems = ({ name, source }, index) => (
    <TouchableOpacity style={styles.navigatorBox} key={`${name}-${index}`}>
      <Image style={styles.icon} source={source} />
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );

  render() {
    const { menuItems } = this.state;

    return (
      <View>
        <ScrollView
          style={styles.scrollNavigator}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.viewNavigator}>
            {menuItems.map(this.renderMenusItems)}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollNavigator: {
    height: 120
  },
  viewNavigator: {
    flexDirection: "row",
    marginLeft: 25
  },
  title: {
    color: "#FFF"
  },
  icon: {
    height: 40,
    width: 40
  },
  navigatorBox: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    height: 100,
    width: 80,
    marginRight: 10,
    borderRadius: 3,
    padding: 8,
    justifyContent: "space-between"
  }
});

export default BottomNavigator;
