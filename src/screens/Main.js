import React from "react";
import { Text, View, TouchableOpacity, Image, Button, BackHandler, StyleSheet, Alert } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
// import MapView from './../components/MapView';
import ImageSwipe from './../components/ImageSwipe';

class LogoTitle extends React.Component {
  onDrawer = () => {
    this.props.navigation.navigate('DrawerOpen');
  }
  render() {
    return (
      <TouchableOpacity onPress={this.onDrawer} style={{ marginRight: 10 }}>
        <Icon name="align-justify" size={30} color="#100" />
      </TouchableOpacity>

    );
  }
}


export default class Main extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <LogoTitle navigation={navigation} />,
      headerLeft: (
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Image
            source={require('./spiro.png')}
            style={{ width: 80, height: 30, borderRadius: 10, }}
          />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: '#d3d3d3'
      },
      headerTintColor: 'red',
      backgroundColor: 'red',

    }
  };

  
  handleBackButton = () => {
   Alert.alert(
       'Exit App',
       'Exiting the application?', [{
           text: 'Cancel',
           onPress: () => console.log('Cancel Pressed'),
           style: 'cancel'
       }, {
           text: 'OK',
           onPress: () => BackHandler.exitApp()
       }, ], {
           cancelable: false
       }
    )
    return true;
  } 
  
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  render() {
    // const resizeMode = 'center';
    const text = 'I am some centered text';

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            style={{
              flex: 1,
              // resizeMode,
            }}
            source={{ uri: 'https://boygeniusreport.files.wordpress.com/2017/11/iphone-x-photo.jpg?quality=98&strip=all&w=782' }}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }}
        >
          <View
              style={{
                flex: 40 / 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style= {{color: 'red', fontSize: 20,}}>{text}</Text>
              <TouchableOpacity  onPress = {()=>{this.props.navigation.navigate('Map')}}>
                <Text style= {{color: 'blue',fontSize: 25,}}>To Map</Text>
              </TouchableOpacity>
          </View>
         
          <View style={{ height: 80, }}>
            <ImageSwipe />
          </View>
        </View>
      </View>
    );
  }
};
