import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
import Sidebar from 'react-native-sidebar';
import { NativeRouter, Route, Link } from 'react-router-native';
import Expo from 'expo';
import {StackNavigator} from 'react-navigation';
import {ToDos} from './ToDos'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  }
  render() {
    const {navigate} = this.props.navigation;
        let pic = {
      uri: 'https://cdn2.iconfinder.com/data/icons/work-flow/512/Clipboard_List-512.png'
    };
    return (
      <View style={styles.container}>
      <Image source={pic} onPress={() => navigate('ToDos')} style={{width: 193, height: 210}}/>
        <Text>WELCOME TO TASKBUDDY!</Text>
        <Text
          onPress={() => navigate('ToDos')}
        >See Your To Do List</Text>
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
