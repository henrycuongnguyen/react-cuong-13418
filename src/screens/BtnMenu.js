import React from "react";
import { Text, View, TouchableOpacity, Image, Platform, StatusBar, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class BtnMenu extends React.Component {
  onDrawer = () => {
    this.props.navigation.navigate('DrawerOpen');
  }
  render() {
    return (
        <View style = {styles.menuTop}>
            <TouchableOpacity onPress={this.onDrawer} style={{ marginRight: 10 }}>
                <Icon name="align-justify" size={30} color="#100" />
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create(
    {
        menuTop: {
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            padding: 15,
            backgroundColor: '#d3d3d3'
        }
    }
)