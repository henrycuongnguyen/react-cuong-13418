import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import firebaseApp from './firebaseApp';

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
         email: '',
         pass: ''
        };
      }

      onLogin = () => {
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.pass).then(() => {Alert.alert(
            'Alert title',
            'Đăng nhap thanh Công'+ this.state.email,
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => this.props.navigation.navigate("Wellcome")},
            ],
            { cancelable: false }
          ),
          this.setState({
              email: '',
              pass: ''
          })
          
        }
        )
        .catch( () => Alert.alert(
            'Alert title',
            'Đăng nhap khong Thành Công',
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          ));
      }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Login</Text>
                    <TextInput
                    style={{ height: 40,width: 250, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    style={{ height: 40,width: 250, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(password) => this.setState({ pass: password })}
                    secureTextEntry={true}
                    value={this.state.pass}
                />
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity 
                        onPress = {() => this.onLogin()}
                        style={{ backgroundColor: '#ff0000' }}>
                        <Text style={{ padding: 5 }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>this.props.navigation.navigate("Register")} style={{ backgroundColor: '#ff0000' }}>
                        <Text style={{ padding: 5 }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Login;