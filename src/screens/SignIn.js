import React from "react";
import { View, Image } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";
import { connect } from 'react-redux';

class SignIn extends React.Component{ 

  constructor(props){
    super(props);
    this.state = {
     email: '',
     pass: ''
    };
  }


  render() {
    var useOther = this.props.use;
    return (
      <View style={{ paddingVertical: 20 }}>
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

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN IN"
            onPress={() => {
              // this.onSave()
              onSignIn().then(() => this.props.navigation.navigate("SignedIn"));
            }}
          />
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {use: state.use.use}
}




export default connect(
  mapStateToProps,
)(SignIn)