import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import { Platform, StatusBar, TouchableOpacity, View, Text, Dimensions, ScrollView, Image } from "react-native";
import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator,
  SwitchNavigator,
  DrawerItems, SafeAreaView
} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const Login = StackNavigator({
    Login: {
    screen: Login,
    navigationOptions: {
      title: "Login",
      headerStyle
    }
  }
});

export const Register = StackNavigator({
    Register: {
      screen: Register,
      navigationOptions: {
        title: "Register",
        headerStyle
      }
    }
  });
  
export const SignedIn = DrawerNavigator({
    Login: {
    screen: Login,
    navigationOptions: {
      drawerLabel: "Main",
      drawerIcon: ({ tintColor }) => <Icon name="rocket" tintColor={'#01A191'} size={24}/>
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      drawerLabel: "Main",
      drawerIcon: ({ tintColor }) => <Icon name="rocket" tintColor={'#01A191'} size={24}/>
    }
  },
},

);