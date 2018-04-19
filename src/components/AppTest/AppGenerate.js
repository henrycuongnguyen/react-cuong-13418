import React from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, Platform} from 'react-native';
import QRCode from 'react-native-qrcode';

export default class ImagePickerExample extends React.Component {
  
  constructor(props){

    super(props);

    this.state={

      Text_Holder_1 : '',

      Text_Holder_2 : ''

    }

  }

  getTextInputValue=()=>{

    this.setState({Text_Holder_2 : this.state.Text_Holder_1});

  }

  render() {

    return (

      <View style={styles.MainContainer}>


        <TextInput
          style={styles.TextInputStyle}
          onChangeText={(text) => this.setState({Text_Holder_1: text})}
          underlineColorAndroid = "transparent" 
          placeholder="Enter URL to Generate QR Code"
        />

        <TouchableOpacity onPress={this.getTextInputValue} activeOpacity={0.7} style={styles.button} >
        
        <Text style={styles.TextStyle}> Generate QR Code </Text>

        </TouchableOpacity>

        <QRCode
          value={this.state.Text_Holder_2}
          size={250}
          bgColor='#000'
          fgColor='#fff'/>


      </View>

    );

  }
}

const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    margin: 10,
    alignItems: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    paddingTop: 40
  },

  TextInputStyle: {

    width: '100%',
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#F44336',
    textAlign: 'center'
  },

  button: {
    alignItems: 'center',
    width: 200,
    paddingTop:8,
    paddingBottom:8,
    backgroundColor: '#009688',
    borderRadius:7,
    marginBottom: 20
  },

  TextStyle:{
    color:'#fff',
    textAlign:'center',
    fontSize: 18
}
  
});