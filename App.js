import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
import Sidebar from 'react-native-sidebar';
// import * as firebase from "firebase";


//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyAKEtc9lCiCfUEj6h3FFGZq344Hgh6aqnc",
//     authDomain: "taskbuddy-8ee26.firebaseapp.com",
//     databaseURL: "https://taskbuddy-8ee26.firebaseio.com",
//     projectId: "taskbuddy-8ee26",
//     storageBucket: "taskbuddy-8ee26.appspot.com",
//     messagingSenderId: "286805478087"
//   };
//   firebase.initializeApp(config);

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
  render() {

    let pic = {
      uri: 'https://cdn2.iconfinder.com/data/icons/work-flow/512/Clipboard_List-512.png'
    };

    return (
      <View style={styles.container}>
      <Image source={pic} style={{width: 193, height: 210}}/>
        <Text></Text>
        <Text></Text>
        <Text>WELCOME TO TASKBUDDY!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#84a0ce',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
