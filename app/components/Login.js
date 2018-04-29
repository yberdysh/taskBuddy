 import React from 'react';
 import {StyleSheet, Text, View} from 'react-native';
 import Input from './Input';

 export default class Login extends React.Component {
  constructor(){
    super
    this.state = {
      email: '',
      password: ''
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Input
          placeholder="Enter your email..."
          label='Email'
          onChangeText={this.setState({email})}
          value={this.state.email}
        />
        <Input
          placeholder="Enter your password..."
          label='Password'
          onChangeText={this.setState({password})}
          value={this.state.password}
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
