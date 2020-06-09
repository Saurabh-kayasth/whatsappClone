import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator,createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Icon from 'react-native-vector-icons/Ionicons';
import Home from "../Screens/Home";
import Status from "../Screens/Status";
import Calls from "../Screens/Calls";

const Tabs = createMaterialTopTabNavigator({
  // Ca: {
  //   screen: Home,
  //   navigationOptions: {
  //     header: null,
  //     tabBarIcon: ({ focused }) => <Icon name="ios-albums" color={focused ? "#fff"  : "gray"} size={22} />
  //   }
  // },
  Chats: {
    screen: Home,
    navigationOptions: {
      tabBarTitle: "Home",
      tabBarIcon: ({ focused }) => <Icon name="ios-home" color={focused ? "#fff"  : "gray"} size={22} />
    },
  },
  Status: {
    screen: Status,
    navigationOptions: {
      tabBarIcon: ({ focused }) => <Icon name="ios-compass" color={focused ? "#fff"  : "gray"} size={22} />
    },
  },
  Calls: {
    screen: Calls,
    navigationOptions: {
      header: null,
      tabBarIcon: ({ focused }) => <Icon name="ios-albums" color={focused ? "#fff"  : "gray"} size={22} />
    }
  },
  

},
  {
    initialRouteName: 'Chats',
    tabBarPosition: 'top',
    swipeEnabled: true,
    lazyLoad: true,
    animationEnabled: true,
    tabBarOptions : {
      style : {
        backgroundColor : "#128C7E",
        height : 50,
        paddingTop : 3,
        paddingBottom : 3,
      },
      activeTintColor: "#fff",
      inactiveTintColor: "#88c5be",
      indicatorStyle : {
        backgroundColor : "#fff",
        elevation : 5,
        height : 3
      },
      labelStyle : {
        fontWeight : "bold"
      }
    }
  }
);


const MainScreenNavigator = createStackNavigator({
  Tab: {
    screen: Tabs,
    navigationOptions: {
      title: "BOOK STORE",
      headerLeft: <Icon style={{ paddingLeft: 22 }} name="ios-book" size={30} color="#fff" />,
      headerStyle: {
        backgroundColor: "#2b2b39",
      },
      headerTitleStyle: { color: "#fff",fontWeight : "bold" },
      header: null
    }
  }
});

export default createAppContainer(MainScreenNavigator);