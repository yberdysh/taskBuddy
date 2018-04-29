'use strict'
let React = require('react-native')
let {StyleSheet} = React;
const constants = {
  actionColor: '#3cb371'
}

module.exports = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderWidth: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16
  },
  liContainer: {
    flex: 2
  },
  liText: {
    color: '#333',
    fontSize: 16
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500"
  },
  toolbar: {
    backgroundColor: '#fff',
    height: 22
  },
  center: {
    textAlign: 'center'
  },
  actionText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },
    textInput: {
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    margin: 10,
    padding: 10
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingLeft: 14,
    paddingBottom: 25,
    paddingTop: 25,
    marginBottom: 40
  },
    item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eaeaea',
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemText: {
    flex: 1,
  },
  doneButton: {
    padding: 10,
    backgroundColor: '#eaeaea'
  },
  saveButton: {
    marginBottom: 30,
    width: 180,
    alignItems: 'center',
    backgroundColor: '#5fce71',
    borderRadius: 150
  },
  cancelButton: {
    marginBottom: 30,
    width: 180,
    alignItems: 'center',
    backgroundColor: '#d1330c',
    borderRadius: 150
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // paddingTop: 60
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 16
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#84a0ce',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 30,
    width: 180,
    alignItems: 'center',
    backgroundColor: '#838ea0',
    borderRadius: 100
  }
})

