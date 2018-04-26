import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
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

export default class App extends React.Component {
  render() {

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>OMG BECKY HER BUTT IS SO BIG!</Text>
        <Text>Something different</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
