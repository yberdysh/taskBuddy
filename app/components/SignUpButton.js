import React, { Component } from 'react';
import {TouchableOpacity, Text, View} from 'react-native'
const styles = require('../style.js')

export default class SignUpButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} underlayColor="white">
      <View style={styles.button}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </View>
    </TouchableOpacity>
    );
  }
}