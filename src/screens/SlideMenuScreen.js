import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class SlideMenuScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ff00ff' }}>
        <TouchableOpacity>
            
            <Text><Icon name="home" size={30} color="#100" />Home</Text>
        </TouchableOpacity>  
      </View>
    );
  }
}