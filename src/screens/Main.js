import React from "react";
import { Text, View, TouchableOpacity, Image, Button, BackHandler } from "react-native";
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

  displayMap() {
    return (
      <MapView></MapView>
    );
  }


  render() {

    return (
      <View style={{ flex: 1 }}>
        <Image
          style={{ flex: 5 / 1 }}
          source={{ uri: 'https://boygeniusreport.files.wordpress.com/2017/11/iphone-x-photo.jpg?quality=98&strip=all&w=782' }}
        />
        <View style={{ flex: 1 / 1 }}>

          <ImageSwipe />

        </View>

      </View>

    )
  }
};
