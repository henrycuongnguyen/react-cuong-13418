import React from 'react';
import { Text, View, Button, Alert, Image, StyleSheet, Dimensions, TextInput } from 'react-native';
import Modal from 'react-native-modalbox';
import FlatlistData from './../data/FlatListData';

export default class EditModalBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            FoodName: '',
            Description: ''
        };
    }

    showEditModal = (edittingFoodName, FlatlistItem) => {
        console.log(edittingFoodName);
        this.setState({
            key: edittingFoodName.key,
            FoodName: edittingFoodName.name,
            Description: edittingFoodName.foodDescription,
            FlatlistItem: FlatlistItem
        });
        this.refs.myModal.open();
    }
    closeForm = () => {
        this.refs.myModal.close();
    }

    render() {
        let widthScreen = Dimensions.get('window').width;
        let heightScreen = Dimensions.get('window').height;
        return (
            <Modal
                ref={'myModal'}
                style={{
                    justifyContent: 'center',
                    width: widthScreen-80,
                    height: 280,
                    shadowRadius: 10,
                    borderRadius: 5
                }}
                backdrop={true}
                position='center'
                onClosed={() => { console.log('edit modal box') }}
            >
                <Text style={styles.titleText}>Modal Food</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Press name food'
                    underlineColorAndroid='transparent'
                    value={this.state.FoodName}
                    onChangeText={(text) => {
                        this.setState(() => {
                            return { FoodName: text }
                        })
                    }}
                    returnKeyType="next"
                    autoFocus={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onSubmitEditing={() => {
                        this.passwordInput.focus();
                    }}
                    ref={ input => this.emailInput = input }
                ></TextInput>
                <TextInput
                    style={styles.textInput}
                    placeholder='Press description food'
                    underlineColorAndroid='transparent'
                    value={this.state.Description}
                    onChangeText={(text) => {
                        this.setState(() => {
                            return { Description: text }
                        })
                    }}
                    returnKeyType="done"
                    ref={ input => this.passwordInput = input }
                ></TextInput>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Button
                        title="Save product"
                        onPress={() => {
                            if (this.state.FoodName == '' || this.state.Description == '') {
                                console.log('press key name and descriptioo');
                                return;
                            }
                            //update existing food
                            var fountIndex = FlatlistData.findIndex((item) => this.state.key == item.key);
                            if (fountIndex < 0) {
                                return;
                            }
                            FlatlistData[fountIndex].name = this.state.FoodName;
                            FlatlistData[fountIndex].foodDescription = this.state.Description;
                            this.props.parentFlatlist.refreshUpdate();
                            this.closeForm();
                        }}
                    ></Button>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        borderColor: '#000',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
    }
})