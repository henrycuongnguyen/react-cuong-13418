import React from "react";
import { ScrollView, Text, Linking, View, TouchableOpacity, Image,StyleSheet } from "react-native";
import { Card, Button } from "react-native-elements";
import images from './image';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import BtnMenu from './BtnMenu';

// const DrawerLabel = ({ label, icon }) => (
//   <View style={{
//     alignItems: 'center',
//     flexDirection: 'row',
//     height: 40,
//     paddingLeft: 10,
//     width: '100%'
//   }}>
//     <View style={{ alignItems: 'center', marginRight: 20, width: 40 }}>
//       <Image resizeMode="contain" source={icon} style={{ height: 40, width: 40 }} />
//     </View>
//     <View style={{ flex: 1 }}>
//       <Text>{label}</Text>
//     </View>
//   </View>
// );

class Home extends React.Component {
  
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" size={30} color="blue" />
    ),
  };

  constructor(props){
    super(props);
    this.state ={

    };
  }

  render(){
    return (
      <View style={{ flex: 1}}>
        <BtnMenu {...this.props} />
        <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
          {
            this.props.use.map((use, index)=>(
            <View key={index} style={{marginTop: 100}}>
              <Text>{use.mail}</Text>
            </View>
          ))}
          {images.map(({ name, image, url, key }) => (
            <Card title={`CARD ${key}`} image={image} key={key}>
              <Text style={{ marginBottom: 10, textAlign: 'center' }}>
                Photo by {name}.
              </Text>
              <Button
                backgroundColor="#03A9F4"
                title="VIEW NOW"
                onPress={() => Linking.openURL(url)}
              />
            </Card>
          ))}
        </ScrollView>
      </View>
)}};


const mapStateToProps = (state) => {
  return {
    use: state.use.use
  }
} 


export default connect(
  mapStateToProps,
  )(Home)

  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });