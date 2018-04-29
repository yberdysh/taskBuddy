import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
import Sidebar from 'react-native-sidebar';
import { NativeRouter, Route, Link } from 'react-router-native';
import Expo from 'expo';
import {StackNavigator} from 'react-navigation';
import * as firebase from "firebase";
import HomeScreen from './app/components/HomeScreen';
import SignUp from './app/components/SignUp';
import {ToDos, firebaseApp} from './app/components/ToDos'
import Login from './app/components/Login'

const NavigationApp = StackNavigator({
  Home: {screen: HomeScreen},
  ToDos: {screen: ToDos},
  SignUp: {screen: SignUp},
  Login: {screen: Login}
}, {
  navigationOptions: {
    headerStyle: {
      marginTop: Expo.Constants.statusBarHeight
    }
  }
});

export default class App extends Component {

  render() {
    const user = firebase.auth().currentUser;

      return (
      <NavigationApp />
    )
  }
}

