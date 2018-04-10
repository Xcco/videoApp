import React, { Component } from 'react';
import Video from 'react-native-video'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
export default class CustomVideo extends React.Component {
    constructor(){
        super()
        this.state={
            percent:0
        }
    }
    handleLoadStart=()=>{}
    handleLoad=()=>{}
    handleProgress=(data)=>{
        const duration=data.playableDuration
        const current=data.currentTime
        const percent=parseFloat((current/duration).toFixed(2))
        this.setState({
            percent,
        })
    }
    handleError=()=>{}
    render() {
        const{style,handleEnd,id,themeColor,width}=this.props
      return (
          <View>
            <Video 
                source={require('../../imgs/videos/demo.mp4')}
                style={style}
                volume={5}
                pause={false}
                rate={1}
                muted={false}
                repeat={false}
                resizeMode='contain'
                onLoadStart={this.handleLoadStart}
                onLoad={this.handleLoad}
                onProgress={this.handleProgress}
                onEnd={()=>handleEnd(id)}
                onError={this.handleError}
            /> 
            <View style={{borderTopWidth:3,borderColor:themeColor,width:this.state.percent*width}}></View>
        </View>
      )
    }
}
const styles=StyleSheet.create({
    container:{
      flex:1,
      height:180,
    },
    video:{
        width:200,
        height:180,
    },
})