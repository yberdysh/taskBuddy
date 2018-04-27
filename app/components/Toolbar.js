import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  AppRegistry
} from "react-native";
const styles = require("../style.js");

export default class Toolbar extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor="coral" barStyle="light-content" />
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}
