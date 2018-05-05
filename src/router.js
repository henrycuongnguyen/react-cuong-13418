import React from "react";
import { Platform, StatusBar, TouchableOpacity, View, Text, Dimensions, ScrollView, Image } from "react-native";
import {
  DrawerNavigator,
  StackNavigator,
  TabNavigator,
  SwitchNavigator,
  DrawerItems, SafeAreaView
} from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from "react-native-vector-icons";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Login from "./firebase/Login";
import ImagePicker from "./components/ImagePicker";
import LoginFB from "./screens/TestFB";
import Register from "./firebase/Register";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Qrcode from "./components/AppTest/Appqrcode";
import GenerateQr from "./components/AppTest/AppGenerate";
import AppGenerate from "./components/AppTest/AppGenerate";
import Main from "./screens/Main";
import Upload from "./components/AppTest/AppImagePicker";
import Camera from "./components/camera/AppCamera";
import WebBrowser from "./components/WebBrowser";
import MyWeb from './components/WebView';
import MapView from './components/MapView';
// import ImageSwipe from './components/ImageSwipe';
import FlatlistBasic from './components/FlatList';
import Audio from './components/Audio';
import PushNotifications from './components/PushNotifications';
import Map from './components/Map';

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

export const FireBaseLg = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login",
      headerStyle
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: "Register",
      headerStyle
    }
  },
  
});

export const Maind = StackNavigator({
  Main: {
    screen: Main,
  },
  Map: {
    screen: Map
  },
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
    MapView: {
      screen: MapView
    },
    Qrcode: {
      screen: Qrcode
    },
    GenerateQr: {
      screen: GenerateQr
    }

  },
  

  {
    tabBarPosition: 'bottom',
  }

);

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <Image style={{
                  flex: 1 ,
                  position : 'absolute',
                  top : 0,
                  left: 0,
                  bottom: 0,
                  // height: Dimensions.get('window').height,
                  width: Dimensions.get('window').width
                }}
                  source={require('./screens/spiro.png')}
      />
    <SafeAreaView style={
      {
        flex: 1,
        backgroundColor : 'transparent'
      }} 
      forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

export const SignedIn = DrawerNavigator({
  Main: {
    screen: Maind,
    navigationOptions: {
      drawerLabel: "Main",
      CustomDrawerContentComponent: '',
      drawerIcon: ({ tintColor }) => <Icon name="rocket" tintColor={'#01A191'} size={24}/>
    }
  },
  FireBaseLg: {
    screen: FireBaseLg
  },
  ImagePicker: {
    screen: ImagePicker
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
},
{
  drawerWidth:  Dimensions.get('window').width-60,
  drawerPosition: 'left',
  useNativeAnimations : false,
  drawerBackgroundColor : 'transparent',
  contentComponent: CustomDrawerContentComponent,
  contentOptions: {
    activeTintColor: '#e91e63',
    activeBackgroundColor : 'transparent',
    // inactiveBackgroundColor:'black',
    inactiveTintColor : 'blue',
    itemsContainerStyle: {
      marginVertical: 0,
    },
    iconContainerStyle: {
      opacity: 0.4,
    },
    itemStyle :{
      // height : 80,
      paddingTop: 15,
      paddingBottom: 15,
      borderBottomColor: '#ddd',
      borderWidth: 0.5,
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderTopColor: 'transparent'
    }

  },

}
);


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