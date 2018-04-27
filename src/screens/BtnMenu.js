import React from "react";
import { Text, View, TouchableOpacity, Image, Platform, StatusBar, StyleSheet, Dimensions } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
import icLogo from './ic_logo.png';
import icMenu from './ic_menu.png';

const { height } = Dimensions.get('window');

export default class BtnMenu extends React.Component {
  onDrawer = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    const { wrapper, row1, textInput, iconStyle, titleStyle } = styles;
    return (
        <View style={wrapper}>
            <View style={row1}>
                <TouchableOpacity onPress={this.onDrawer} style={{ marginRight: 10 }}>
                    <Image source={icMenu} style={iconStyle} />
                </TouchableOpacity>
                <Text style={titleStyle}>Wearing a Dress</Text>
                <Image source={icLogo} style={iconStyle} />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper: { 
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        height: height / 8, 
        backgroundColor: '#34B089', 
        padding: 10, 
        justifyContent: 'space-around' 
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    
    titleStyle: { color: '#FFF', fontSize: 20 },
    iconStyle: { width: 25, height: 25 }
});
