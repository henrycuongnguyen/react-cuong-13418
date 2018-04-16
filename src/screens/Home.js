import React from "react";
import { ScrollView, Text, Linking, View, TouchableOpacity, Image } from "react-native";
import { Card, Button } from "react-native-elements";
import images from './image';
import {connect} from 'react-redux';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./spiro.png')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}


class Home extends React.Component { 
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerLeft: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };

  constructor(props){
    super(props);
    this.state ={

    };
  }

  render(){
    // var propuse=this.props.use;
    // if(propuse.length>0){
              
    // }
    return (
      <View style={{ flex: 1 }}>
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