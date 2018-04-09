//暂时弃用 statusbar 仍有效果


import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import TabControl from './src/pages/TabControl'

export default class app extends Component{
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  test: {
    height:50,
    backgroundColor:'blue',
    alignSelf:'stretch',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

