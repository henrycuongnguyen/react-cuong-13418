import React from "react";
import { Text, View, TouchableOpacity, Image, Button,AsyncStorage, TextInput } from "react-native";



export default class LoginWordpress extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            validating: false
        }
    }

    validate = () =>{
		this.setState({ validating: true });

		let formData = new FormData();
		formData.append('type', 'login');
		formData.append('email', this.state.email);
		formData.append('password', this.state.password);

		return fetch('localhost:81/wwwrs/authentication.php', {
			method: 'POST',
			body: formData
		})
			.then((response) => response.json())
			.then((responseJson) => {
				let data = responseJson.data;

				if (this.saveToStorage(data)){
					this.setState({
						validating: false
					});
					
					/* Redirect to accounts page */
					Actions.pageAccount();
				} else {
					console.log('Failed to store auth');
				}
			})
			.catch((error) => {
				console.error(error);
			});
    }
    

    async saveToStorage(userData){
		if (userData) {
			await AsyncStorage.setItem('user', JSON.stringify({
					isLoggedIn: true,
					authToken: userData.auth_token,
					id: userData.user_id,
					name: userData.user_login
				})
			);
			return true;
		}

		return false;
	}

  render() {

    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <View>
                <Text>Email</Text>
                <TextInput onChangeText={(text) => this.setState({email:text})} />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput secureTextEntry onChangeText={(text) => this.setState({password:text})} />
            </View>
            <TouchableOpacity style={{ marginTop: 50 }} onPress={() => {
                if( this.state.email && this.state.password ){
                    this.validate();

                }
            }} >
                <Text>Authenticate</Text>
            </TouchableOpacity>
        </View>
    )
  }
};
