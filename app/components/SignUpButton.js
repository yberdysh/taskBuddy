import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native'
// const styles = require('../style.js')

export default class SignUpButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress(this.props.email, this.props.pass)} underlayColor="white">
      <View style={styles.button}>
        <Text style={styles.text}>SIGN UP</Text>
      </View>
    </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 20,
    width: '100%',
    backgroundColor: '#00aeef',
    borderRadius: 4,
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18
  }
})
