import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Input } from "./Input";
import SignUpButton from "./SignUpButton";
import signup from './Firebase.js'

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  // async signup(email, pass) {
  //   try {
  //     await firebase.auth().createUserWithEmailAndPassword(email, pass);

  //     console.log("Account created");

  //     // Navigate to the Home page, the user is auto logged in
  //   } catch (error) {
  //     console.log(error.toString());
  //   }
  // }
  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Please enter your email"
          label="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <Input
          placeholder="Enter a password"
          label="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          secureTextEntry
        />
        <SignUpButton onPress={signup} email={this.state.email} pass={this.state.password}>
          {" "}
          SIGN UP{" "}
        </SignUpButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});
