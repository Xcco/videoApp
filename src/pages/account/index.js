import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
export default class extends React.Component {
    render() {
      return (
        <View style={style.main}>
          
          <Text>暂无详情信息</Text>
        </View>
      )
    }
}
const style=StyleSheet.create({
  main:{
    flex:1,
    height:300,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
  }
})