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

// const firebaseConfig = {
//     apiKey: "AIzaSyDtqe_XHo7xoyjjHPiweocaKm3OitwbFHU",
//     authDomain: "itemlister-8ebed.firebaseapp.com",
//     databaseURL: "https://itemlister-8ebed.firebaseio.com",
//     projectId: "itemlister-8ebed",
//     storageBucket: ""
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

const NavigationApp = StackNavigator({
  Home: { screen: HomeScreen},
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

  // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyAKEtc9lCiCfUEj6h3FFGZq344Hgh6aqnc",
  //   authDomain: "taskbuddy-8ee26.firebaseapp.com",
  //   databaseURL: "https://taskbuddy-8ee26.firebaseio.com",
  //   projectId: "taskbuddy-8ee26",
  //   storageBucket: "taskbuddy-8ee26.appspot.com",
  //   messagingSenderId: "286805478087"
  // };
  // firebase.initializeApp(config);

// async signup(email, pass) {

//     try {
//         await firebase.auth()
//             .createUserWithEmailAndPassword(email, pass);

//         console.log("Account created");

//         // Navigate to the Home page, the user is auto logged in

//     } catch (error) {
//         console.log(error.toString())
//     }

// }

export default class App extends Component {

  addItem(){
    // this.setModalVisible(true);
  }

  render() {



    return (
      <NavigationApp />
    );
  }
}

