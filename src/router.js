import React from "react";
import { Platform, StatusBar, TouchableOpacity, View, Text } from "react-native";
import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator,
  SwitchNavigator
} from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Qrcode from "./../Appqrcode";
import GenerateQr from "./../AppGenerate";
import AppGenerate from "./../AppGenerate";
import Main from "./screens/Main";
import Upload from "../AppImagePicker";
import Camera from "./components/camera/AppCamera";
import WebBrowser from "./components/WebBrowser";
import MyWeb from './components/WebView';
// import ImageSwipe from './components/ImageSwipe';
import FlatlistBasic from './components/FlatList';
import Audio from './components/Audio';
import LoginWordpress from './screens/LoginWordpress';
import PushNotifications from './components/PushNotifications';

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = StackNavigator({

  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
      headerStyle
    }
  },

  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In",
      headerStyle
    }
  }
});

export const Maind = StackNavigator({
  Main: {
    screen: Main,
  }
});

export const SignedIn2 = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={30} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user" size={30} color={tintColor} />
        )
      }
    },
    Qrcode: {
      screen: Qrcode
    },
    GenerateQr: {
      screen: GenerateQr
    }

  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);

export const SignedIn = DrawerNavigator({
  Main: {
    screen: Maind
  },
  PushNotifications: {
    screen: PushNotifications
  },
  Camera: {
    screen: Camera
  },
  MyWeb: {
    screen: MyWeb
  },
  Profile: {
    screen: SignedIn2
  },
  // LoginWordpress: {
  //   screen: LoginWordpress
  // },
  Upload: {
    screen: Upload
  },

  WebBrowser: {
    screen: WebBrowser
  },
  // ImageSwipe: {
  //   screen: ImageSwipe
  // },
  FlatListItem: {
    screen: FlatlistBasic
  },



});


export const createRootNavigator = (signedIn = false) => {
  return SwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};