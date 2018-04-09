import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Image,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { DrawerNavigator } from 'react-navigation'
import Detail from './detail'

import request, {get,url} from '../../common/request'
import CustomVideo from './video'

const width = Dimensions.get('window').width

const data={

}
class List extends Component {
    static navigationOptions = {
        title: 'List',
     }
    constructor(){
        super()
        this.state = {
        selectedTab:'video',
        page:0,
        isLoading:false,
        isRefreshing:false,
        data:[],
        finished:false,
        playlist:{}
        }
    }
    componentDidMount(){
        this._fetchData(0)
    }
    _fetchData = (page) => {
        this.setState({isLoading:true})
        request.get(request.url.list,{page})
                .then((data)=>{
                    if(data.success){
                        if(page === 0){
                            this.setState({
                                data:data.data.data,
                                isLoading:false,
                                finished:data.finished,
                                page,
                            })     
                        }else{
                            this.setState({
                                data:[...this.state.data,...data.data.data],
                                isLoading:false,
                                finished:data.finished,
                                page,
                            })
                        } 
                    }
                })
                .catch((err)=>{
                    console.log(err)
                    this.setState({isLoading:false})
                })
    }
    _onRefresh = () => {
        this._fetchData(0)
    }
    _playVideo = (id) => {
        console.log(id)
        this.setState({
            playlist:{...this.state.playlist,[id]:true}
        })
        console.log(this.state.playlist)
    }
    _fetchMoreData = () => {
      if(this.state.finished || this.state.isLoading){
          return
      }
      this._fetchData(this.state.page+1)
    }
    _renderList = () => {
        return(
            <FlatList
                data={this.state.data}
                automaticallyAdjustContentInsets={false}
                showsVerticalScrollIndicator={false}
                onEndReached={this._fetchMoreData}
                onEndReachedThreshold={20}
                ListFooterComponent={this.state.finished
                                    ?<Text>没有更多视频啦</Text>
                                    :<ActivityIndicator
                                        animating={this.state.isLoading}
                                        style={[{height: 80}]}
                                        size="large"
                                    />}
                refreshControl={<RefreshControl
                                    refreshing={this.state.isRefreshing}
                                    onRefresh={this._onRefresh}
                                    tintColor="#ef6c80"
                                    title="加载中..."
                                    titleColor="#ef6c80"
                                    colors={['#ff0000', '#00ff00', '#0000ff']}
                                    progressBackgroundColor="#ffff00"
                                />}
                renderItem={({item}) => (
                    <TouchableHighlight>
                        <View style={styles.videoBoard}>
                            <Text 
                                style={styles.videoTitle}
                                onPress={() => {
                                    console.log(this.props.navigation)
                                    this.props.navigation.navigate('Account')}}
                            >{item.name}</Text>
                            {this.state.playlist[item.id]
                            ?<CustomVideo 
                                style={styles.videoPlayer}
                                id={item.id}
                            />
                            :<TouchableHighlight
                                onPress={()=>this._playVideo(item.id)}>
                                <Image
                                    source={{}}
                                    style={styles.thumbImg}
                                    
                                />
                            </TouchableHighlight>}
                            <View style={styles.iconPlay}>
                            <Icon
                                size={28}
                                name='ios-play'
                                color='#fff' />
                            </View>
                            <View style={styles.videoFooter}>
                                <View style={styles.videoFooterWords}>
                                    <Text>{item.csentence}</Text>
                                </View>
                                <View style={styles.videoFooterOptions}>    
                                    <View style={styles.videoFooterTab}>
                                        <Icon
                                            size={16}
                                            name={item.like?'ios-heart':'ios-heart-outline'}
                                            color={item.like?'#ef6c80':'#b4a8a8'} />
                                        <Text> {item.likeNumber}</Text>   
                                    </View>
                                    <View style={styles.videoFooterTab}>
                                        <Icon
                                            size={16}
                                            name={'ios-chatboxes'}
                                            color={'#ccc'} />
                                        <Text> {item.commentNumber}</Text>
                                    </View> 
                                </View>
                            </View>
                        </View>
                    </TouchableHighlight>
                )}
            />
        )
    }

  render(){
    return (
     <View style={styles.main}>
        <View style={styles.header}>
            <Text style={styles.headerText}>视频列表</Text>
        </View>
        {this._renderList()}
     </View>
    )
  }
}
const subjectColor='#ef6c80'
const fontColor='#b4a8a8'
const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:'#f7f7f7',
    },
    header:{
        backgroundColor:subjectColor,
        height:60,
        alignItems:'center',
        justifyContent:'center',
    },
    headerText:{
        marginTop:12,
        color:'#fff',
        fontSize:16,
    },
    videoBoard:{
        height:300,
        position:'relative',
        marginBottom:15,
        backgroundColor:'#fff',
    },
    videoTitle:{
        height:60,
    },
    videoFooter:{
    },
    videoFooterWords:{
        height:30,
    },
    videoFooterOptions:{
        flexDirection:'row',
    },
    videoFooterTab:{
        flexDirection:'row',
        height:30,
        marginLeft:10,
    },
    thumbImg:{
        height:180,
        backgroundColor:'purple',
    },
    videoPlayer:{
        height:180,
        backgroundColor:'pink',
    },
    iconPlay:{
        position:'absolute',
        left:width/2-20,
        top:130,
        borderWidth:1,
        width:40,
        height:40,
        borderRadius:40,
        paddingLeft:14,
        paddingTop:6,
        borderColor:'#fff',
        opacity:0.8,
        // backgroundColor:'#000'
    },
    test:{
        borderWidth:1,
        borderColor:'red',
    }
});

//两个页面抽空应重新配置
const videoList =DrawerNavigator({
    List: { screen: List },
    detail: { screen: Detail },
  });
export default videoList


