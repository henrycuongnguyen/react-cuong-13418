import React from "react";
import { AppRegistry, Image, StatusBar,Platform, TouchableOpacity, FlatList, View} from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
const routes = ["Home", "Chat", "Profile"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container style={{marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
        <Content>
          <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            circle
            style={{
              height: 70,
              width: 70,
              borderRadius: 70,
              position: "absolute",
              alignSelf: "center",
              top: 20
            }}
            source={{
              uri:
                "https://cdn57.androidauthority.net/wp-content/uploads/2015/06/use-web-api-bart-androids.png"
            }}
          />
         <Text 
            style={{
                position: "absolute",
                alignSelf: "center",
                top: 40
              }}>
              hfdkj
          </Text>
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={ () => this.props.navigation.navigate(data) }
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
