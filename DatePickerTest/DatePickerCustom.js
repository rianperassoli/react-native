import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  DatePickerAndroid
} from "react-native";

export default class DatePickerCustom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      androidDateString: this.props.placeholder,
      textStyle: this.props.textStyle,
      fieldStyle: this.props.fieldStyle,
      date: new Date()
    };

    this.setDate = this.setDate.bind(this);
  }

  async setDate() {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: this.state.date
      });

      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({
          date: new Date(year, month, day)
        });
      }
    } catch ({ code, message }) {
      console.warn("Falha ao abrir o DatePickerAndroid", message);
    }

    const { date } = this.state;

    this.setState({
      androidDateString: `${date.getDate() < 10 ? "0" : ""}${date.getDate()}/${
        date.getMonth() < 9 ? "0" : ""
      }${this.state.date.getMonth() + 1}/${this.state.date.getFullYear()}`
    });
  }

  render() {
    return (
      <View style={[styles.field, this.state.fieldStyle]}>
        <TouchableOpacity
          onPress={async () => {
            await this.setDate();
          }}
        >
          <Text style={[styles.text, this.state.textStyle]}>
            {this.state.androidDateString}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  field: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 3,
    minWidth: 100
  },
  text: {
    padding: 10
  }
});
