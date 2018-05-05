import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button, KeyboardAvoidingView } from 'react-native';
import firebaseApp from './firebaseApp';
import Expo from "expo";
import { Facebook } from "expo";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            signedIn: false,
            name: "",
            photoUrl: ""
        };
    }

    signInGG = async () => {
        let _idAndroidID = "144203679867-b9irrvlfhgae7u6bs6euo9gt0av4cm2m.apps.googleusercontent.com";
        try {
          const result = await Expo.Google.logInAsync({
            androidClientId: _idAndroidID,
            scopes: ["profile", "email"]
          })
    
          if (result.type === "success") {
            this.setState({
              signedIn: true,
              name: result.user.name,
              photoUrl: result.user.photoUrl
            })
          } else {
            console.log("cancelled")
          }
        } catch (e) {
          console.log("error", e)
        }
      }

    
    loginFB = async () => {
        let _idFB = '150042472506537';
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync( _idFB, {
            permissions: ['public_profile', 'email', 'user_friends'],
        });
        if (type === 'success') {
            const response = await fetch(
                `https://graph.facebook.com/me?access_token=${token}`
            );
           
            Alert.alert(
                'Logged in!',
                `Hi ${(await response.json()).name}!`,
                [
                    { text: 'OK', onPress: () => this.props.navigation.navigate("Main") },
                ],
            );
        }
    }

    onLogin = () => {
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.pass).then(() => {
            Alert.alert(
                'Alert title',
                'Đăng nhập thành Công' + this.state.email,
                [
                    { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'OK', onPress: () => this.props.navigation.navigate("Wellcome") },
                ],
                { cancelable: false }
            ),
            this.setState({
                email: '',
                pass: ''
            })

        }
        )
            .catch(() => Alert.alert(
                'Alert title',
                'Đăng nhập không Thành Công',
                [
                    { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                    { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            ));
    }

    render() {

        // function show(...args) {
        //     console.log(args.length)
        // }

        // show("Tuan")
        // show("Tung", "Tuan")
        

        return (
            <KeyboardAvoidingView style={styles.container}  behavior="padding" enabled>
                {this.state.signedIn 
                ? 
                (
                <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
                ) 
                : 
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                
                <TouchableOpacity
                    onPress={() => this.signInGG()}
                    style={styles.button}>
                    <Text style={{color: '#ffffff'}}>Sign in with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.loginFB()}
                    style={styles.button}>
                    <Text style={{color: 'pink'}}>Sign in with Facebook</Text>
                </TouchableOpacity>
                
                    <TextInput
                        style={styles.inp}
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        underlineColorAndroid='transparent'
                        placeholder="Enter email"
                    />
                    <TextInput
                        style={styles.inp}
                        onChangeText={(password) => this.setState({ pass: password })}
                        secureTextEntry={true}
                        value={this.state.pass}
                        placeholder="**************"
                        underlineColorAndroid='transparent'
                    />
                
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => this.onLogin()}
                        style={{ backgroundColor: '#ff0000', margin: 3, alignItems: 'center', padding: 10 }}>
                        <Text style={{color: '#ffffff'}}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate("Register")} 
                        style={{ backgroundColor: '#ff0000', margin: 3, alignItems: 'center', padding: 10 }}
                    >
                        <Text style={{color: '#ffffff'}}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
            }
            </KeyboardAvoidingView>
        );
    }
}

  
  const LoggedInPage = props => {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Welcome:{props.name}</Text>
        <Image style={styles.image} source={{ uri: props.photoUrl }} />
      </View>
    )
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
    header: {
      fontSize: 15
    },
    image: {
      marginTop: 15,
      width: 150,
      height: 150,
      borderColor: "rgba(0,0,0,0.2)",
      borderWidth: 3,
      borderRadius: 150
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 5,
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 40,
    },
    button1: {
        backgroundColor: '#ff0000', 
        margin: 3, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10 ,
        width: 100,
        height: 40,
        borderRadius: 3
    },
    inp: {
        height: 40,
        width: 250,
        borderColor: 'gray', 
        borderWidth: 1, 
        marginBottom: 15,
        paddingLeft: 5
        }
  })


export default Login;