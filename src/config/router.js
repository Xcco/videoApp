//将navigator独立出来会报错
import React, { Component } from 'react';
import { TabNavigator,DrawerNavigator,StackNavigator } from 'react-navigation';
import List from '../pages/list'
import Edit from '../pages/edit'
import Account from '../pages/account'
import Detail from '../pages/list/detail'
import Icon from 'react-native-vector-icons/Ionicons'


const videoList =DrawerNavigator({
    List: { screen: List },
    Detail: { screen: Detail },
});
const Navigator = TabNavigator(
    {
        Home: { 
            screen: videoList,
        },
        Edit: { screen: Edit },
        Account: { screen: Account },
    },{
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Home') {
                iconName = 'md-images';
            } else if (routeName === 'Edit') {
                iconName = 'md-pricetags';
            } else if (routeName === 'Account') {
                iconName = 'md-person';
            }
    
            return <Icon name={iconName} size={28} color={tintColor} />;
            },
        }),
        tabBarOptions:{
            activeTintColor:'#ef6c80',
            showLabel:true,
            labelStyle:{
                fontSize:10
            }
        }
    }
);

export default Navigator