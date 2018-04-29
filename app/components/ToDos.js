import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ListView, TouchableHighlight, TouchableOpacity, Modal, TextInput
} from "react-native";
import * as firebase from "firebase";
import Toolbar from "./Toolbar";

import AddButton from "./AddButton";
const styles = require("../style");

const firebaseConfig = {
  apiKey: "AIzaSyAKEtc9lCiCfUEj6h3FFGZq344Hgh6aqnc",
  authDomain: "taskbuddy-8ee26.firebaseapp.com",
  databaseURL: "https://taskbuddy-8ee26.firebaseio.com",
  projectId: "taskbuddy-8ee26",
  storageBucket: "taskbuddy-8ee26.appspot.com"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export class ToDos extends Component {
  constructor() {
    super();
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      text: "",
      itemDataSource: ds,
      modalVisible: false
    };
    this.itemsRef = this.getRef().child("items");
    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  componentDidMount() {
    this.getItems(this.itemsRef);
  }

  getItems(itemsRef) {
    itemsRef.on("value", snap => {
      let items = [];
      snap.forEach(child => {
        items.unshift({
          title: child.val().title,
          _key: child.key
        });
      });
      return this.setState({
        itemDataSource: this.state.itemDataSource.cloneWithRows(items)
      });
    });
  }

  pressRow(item) {
    return this.itemsRef.child(item._key).remove();
  }

  setModalVisible(visible) {
    this.setState({
      modalVisible: visible
    });
  }

  renderRow(item) {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.title}</Text>
        <TouchableOpacity style= {styles.doneButton}
          onPress={() => {
            return this.pressRow(item);
          }} >
          <Text>Done</Text>
        </TouchableOpacity>
      </View>
    );
  }

  addItem() {
    this.setModalVisible(true);
  }

  setStateUtil(property, value = undefined) {
    return this.setState({
      [property]: value
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
        >
          <View style={{ marginTop: 30 }}>
            <View>
              <Toolbar title="Add Item" />
              <TextInput
                value={this.state.text}
                placeholder="Add New Task"
                onChangeText={value => this.setStateUtil("text", value)}
                style={styles.textInput}
                returnKeyType="done"
                onSubmitEditing={this.onNewItem}
              />
              <View style={styles.buttonContainer}>
              <TouchableHighlight
                onPress={() => {
                  this.itemsRef.push({ title: this.state.text });
                  this.setModalVisible(!this.state.modalVisible);
                  this.setStateUtil("text", '');
                }} >
                <View style={styles.saveButton}>
                <Text style= {styles.buttonText}>Save Item</Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.setStateUtil("text", '');
                }} >
                <View style={styles.cancelButton}>
                <Text style= {styles.buttonText}>Cancel</Text>
                </View>
              </TouchableHighlight>
              </View> 
            </View>
          </View>
        </Modal>
        <Toolbar title="To Do List" />
        <ListView
          enableEmptySections={true}
          dataSource={this.state.itemDataSource}
          renderRow={this.renderRow}
        />
        <AddButton onPress={this.addItem.bind(this)} title="Add Item" />
      </View>
    );
  }
}
