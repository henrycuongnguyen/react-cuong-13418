import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert , KeyboardAvoidingView, StyleSheet } from 'react-native';
import firebaseApp from './firebaseApp';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
         email: '',
         pass: ''
        };
      }

      onRegister = () =>{
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass)
        .then(() => {Alert.alert(
            'Alert title',
            'Đăng ký Thành Công'+ this.state.email,
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'OK', onPress: () => this.props.navigation.navigate("Login")},
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
            'Đăng ký không Thành Công',
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
            <KeyboardAvoidingView style={styles.container}  behavior="padding" enabled>
                    <TextInput
                        style={{ height: 40, width: 250, borderColor: 'gray', borderWidth: 1, marginBottom: 10, color: '#000', paddingLeft: 10 }}
                        onChangeText={(email) => this.setState({ email: email })}
                        value={this.state.email}
                        placeholder="Email"
                        underlineColorAndroid='transparent'
                        
                        />
                    <TextInput
                        style={{ height: 40, width: 250, borderColor: 'gray', borderWidth: 1, color: '#000',paddingLeft: 10 }}
                        onChangeText={(password) => this.setState({ pass: password })}
                        secureTextEntry={true}
                        value={this.state.pass}
                        placeholder="Pass"
                        underlineColorAndroid='transparent'

                    />
                
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                        <TouchableOpacity 
                            onPress = {() => this.onRegister()}
                            style={{ backgroundColor: '#ff0000', borderRadius: 4 }}>
                            <Text style={{ padding: 10, color: '#fff' }}>Register user</Text>
                        </TouchableOpacity>
                    </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
})

export default Register;