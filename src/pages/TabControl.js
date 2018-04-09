//暂时弃用


import React, { Component } from 'react';
import {
  TabBarIOS,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { TabNavigator } from 'react-navigation';

import List from './list'
import Edit from './edit'
import Account from './account'

// class TabControl extends Component {
//   constructor(){
//     super()
//     this.state = {
//       selectedTab:'video'
//     }
//   }
//   render(){
//     return (
//       <TabBarIOS
//       style={styles.mainBar}
//       tintColor="blue"
//       barTintColor="pink">
//         <Icon.TabBarItem
//           iconName="ios-videocam-outline"
//           selectedIconName='ios-videocam'
//           selected={this.state.selectedTab === 'video'}
//           onPress={() => {
//             this.setState({selectedTab:'video'})
//           }}
//           badge={1}>
//           <List />
//         </Icon.TabBarItem>
//         <Icon.TabBarItem
//           iconName="ios-recording-outline"
//           selectedIconName='ios-recording'
//           selected={this.state.selectedTab === 'record'}
//           onPress={() => {
//             this.setState({selectedTab:'record'})
//             console.log('2')
//           }}
//           badge={1}>
//           <List />
//         </Icon.TabBarItem>
//         <Icon.TabBarItem
//           iconName="ios-more-outline"
//           selectedIconName='ios-more'
//           selected={this.state.selectedTab === 'more'}
//           onPress={() => {
//             this.setState({selectedTab:'more'})
//           }}
//           badge={1}>
//           <View />
//         </Icon.TabBarItem>
//     </TabBarIOS>
//     )
//   }
// }
// const styles = StyleSheet.create({
//   mainBar:{
//     alignSelf:'stretch',
//   },
//   tabText: {
//     color: 'white',
//     margin: 50,
//   },
// });




const MainScreenNavigator = TabNavigator({
  List: { screen: List },
  Edit: { screen: Edit },
  Account: { screen: Account },
  });

export default MainScreenNavigator


