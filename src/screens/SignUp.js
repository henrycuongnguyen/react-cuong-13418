import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";
import { connect } from 'react-redux';
import {actAddUse} from '../actions/actions';

class SignUp extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      pass: '',
      confirmpass: ''
    };
  }


  onSave = () => {
      var {  email, pass, confirmpass } = this.state;
      var use = {
          email,
          pass,
          confirmpass
      };
      if(email=='' || pass=='' || confirmpass==='') return;
      
      this.props.dispatchactAddUse(use);
      this.setState({
        email: '',
        pass: '',
        confirmpass: ''
      });
      this.props.navigation.navigate("SignedIn");
  }


  render() {
    
    return (
      <View style={{ paddingVertical: 20 }}>

      {
        this.props.use.map((use, index) => (
          <View key={index} style={{alignItems: 'center'}}>
          {
            console.log(use)
          }
            <Text>mail: {use.email}</Text>
          </View>
        ))
      }


      <Card>
        <FormLabel>Email</FormLabel>
        <FormInput
            placeholder="Email address..."
            
            onChangeText = {(text) => {
              this.setState(() => {
                  return {email: text}
              })
          }}
        />
        <FormLabel>Password</FormLabel>
        <FormInput 
          secureTextEntry
          placeholder="Password..."
          onChangeText = {(text) => {
            this.setState(() => {
                return {pass: text}
            })
        }}
        />
        <FormLabel>Confirm Password</FormLabel>
        <FormInput 
          secureTextEntry 
          placeholder="Confirm Password..." 
          onChangeText = {(text) => {
            this.setState(() => {
                return {confirmpass: text}
            })
        }}
        />
  
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="#03A9F4"
          title="SIGN UP"
          onPress={this.onSave}
          // onPress={() => {
          //   onSignIn().then( () => this.props.navigation.navigate("SignedIn"));
          // }}
        />
        <Button
          buttonStyle={{ marginTop: 20 }}
          backgroundColor="transparent"
          textStyle={{ color: "#bcbec1" }}
          title="Sign In"
          onPress={() => this.props.navigation.navigate("SignIn")}
        />
      </Card>
    </View>
    );
}}

const mapStateToProps = (state) => {
  return {use: state.use.use}
}

const mapDispatchToProps = (dispatch, prop) => {
  return {
    dispatchactAddUse: (use) => dispatch(actAddUse(use)),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp)