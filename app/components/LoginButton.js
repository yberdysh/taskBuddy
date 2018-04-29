import React, { Component } from 'react';
import {TouchableOpacity, Text, View} from 'react-native'
const styles = require('../style.js')

export default class LoginButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} underlayColor="white">
      <View style={styles.button}>
        <Text style={styles.buttonText}>LOG IN</Text>
      </View>
    </TouchableOpacity>
    );
  }
}
