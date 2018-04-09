import React, { Component } from 'react';
import Video from 'react-native-video'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
export default class CustomVideo extends React.Component {
    handleLoadStart=()=>{}
    handleLoad=()=>{}
    handleProgress=()=>{}
    handleEnd=()=>{}
    handleError=()=>{}
    render() {
        const{style}=this.props
      return (
        <View style={this.props.style}>
            <Video 
                source={{uri:data.videoUrl}}
                style={styles.video}
                volume={5}
                pause={false}
                rate={1}
                muted={false}
                repeat={false}
                resizeMode='contain'
                onLoadStart={this.handleLoadStart}
                onLoad={this.handleLoad}
                onProgress={this.handleProgress}
                onEnd={this.handleEnd}
                onError={this.handleError}
            /> 
        </View>
      )
    }
}
const style=StyleSheet.create({
    container:{
      flex:1,
      height:180,
    },
    video:{
    },
})