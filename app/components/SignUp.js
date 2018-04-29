import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from './Input';
import SignUpButton from './SignUpButton';

export default class SignUp extends Component {
 constructor(){
   super()
   this.state = {
     name: '',
     email: '',
     password: ''
   }
 }
 render(){
   return (
     <View style={styles.container}>
     <Input
         placeholder="Please enter your name"
         label="Name"
         onChangeText={name => this.setState({name})}
         value={this.state.name}
       />
       <Input
         placeholder="Please enter your email"
         label="Email"
         onChangeText={email => this.setState({email})}
         value={this.state.email}
       />
       <Input
         placeholder="Enter a password"
         label="Password"
         onChangeText={password => this.setState({password})}
         value={this.state.password}
         secureTextEntry
       />
       <SignUpButton onPress={() => console.log('sign up pressed')}> SIGN UP </SignUpButton>
     </View>
    )}
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   padding: 20
 }
})