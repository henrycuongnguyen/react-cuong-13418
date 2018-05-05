import React from "react";
import { StyleSheet, Text, View, TouchableOpacity,Alert, Button } from "react-native";
import Expo from "expo";
import { Facebook } from "expo";

export default class TestFB extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          signedIn: false,
          name: "",
          photoUrl: ""
        }
      }

     loginFB = async () =>{
        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('150042472506537', {
            permissions: ['public_profile', 'email', 'user_friends'],
          });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}`
            );
          Alert.alert(
            'Logged in!',
            `Hi ${(await response.json()).name}!`,
          );
        }
      }

      signIn = async () => {
        try {
          const result = await Expo.Google.logInAsync({
            androidClientId: "144203679867-b9irrvlfhgae7u6bs6euo9gt0av4cm2m.apps.googleusercontent.com",
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

    render() {
        return (
            <View style={styles.container}>
                {this.state.signedIn ? (
                <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
                ) : (
                <LoginPage signIn={this.signIn} loginFB = {this.loginFB} />
                )}
            </View>
        );
    }
}

const LoginPage = props => {
    return (
      <View>
        <Text style={styles.header}>Sign In With Google</Text>
        <Button title="Sign in with Google" onPress={() => props.signIn()} />
        <Text style={styles.header}>Sign In With Fcebook</Text>
        <TouchableOpacity
            style = {styles.button}
            onPress = {()=> props.loginFB()}
        >
            <Text style={{color: 'white'}}>Connect to facebook</Text>
        </TouchableOpacity>
      </View>
    )
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
        borderRadius: 7,
    }
  })
