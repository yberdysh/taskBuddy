 import React from 'react';
 import {StyleSheet, Text, View} from 'react-native';
 import Input from './Input';

 export default class Login extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Input
          placeholder="Enter your email..."
          labe='Email'
        />
        <Input
          placeholder="Enter your password..."
          labe='Password'
          secureTextEntry
        />
      </View>)
  }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
})
