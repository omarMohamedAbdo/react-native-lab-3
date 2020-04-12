import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import PostsList from '../containers/PostsList'
import PostDetails from '../containers/PostDetails'
import Profile from '../containers/Profile'

const {Navigator: StackNavigator , Screen: StackScreen} = createStackNavigator();
const {Navigator: TabNavigator , Screen: TabScreen} = createBottomTabNavigator();

const StackNav = () => (
<StackNavigator screenOptions={{
    headerStyle:{backgroundColor:"#6b558e"},
}}>
    <StackScreen name="PostsList" component={PostsList} options={{
       title:"Posts List",
       headerTitleAlign:"center" ,
       headerTintColor:"white",
       headerTitleStyle:{fontSize:30,fontWeight:"bold"}
    }}/>
    <StackScreen name="PostDetails" component={PostDetails} options={{
       title:"Details",
       headerTitleAlign:"center",
       headerTintColor:"white",
       headerTitleStyle:{fontSize:30,fontWeight:"bold"} 
    }}/>
</StackNavigator>
)

export default function () {
   return ( 
    <NavigationContainer>
        <TabNavigator 
           tabBarOptions={{
               style:{backgroundColor:"#6b558e",
               height: 60,
               paddingVertical: 5,
               
            },
            labelStyle: {        
                fontSize: 12,
                fontWeight:"solid",        
                lineHeight: 20,        
                fontFamily: "CircularStd-Book"      
            },
            activeTintColor:"white",
            animationEnabled: true,
            swipeEnabled: true
        }} 
        >
            <TabScreen name="Posts" component={StackNav} options={{
                style:{fontSize:50},
                tabBarLabel: 'Posts',
                tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="comment" color={color} size={size} />
          ),
            }}/>
            <TabScreen name="Profile" component={Profile} options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}/>
        </TabNavigator>
    </NavigationContainer> )
}





const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });