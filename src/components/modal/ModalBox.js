import React from 'react';
import { Text, View, Button,Alert, Image, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modalbox';
import FlatlistData from './../data/FlatListData';

export default class ModalBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            newFoodName: '',
            newDescription: ''
        };
    }

    showModal = () =>{
        this.refs.myModal.open();
    }

    closeForm = () =>{
        this.refs.myModal.close();
    }

    s4(){
        return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
      }
    gerenateID(){
        return this.s4()+ this.s4()+ '-' + this.s4()+ '-' + this.s4()+ '-' + this.s4()+ '-' + this.s4() + this.s4()+ this.s4();
      }
    
  render() {
    let widthScreen = Dimensions.get('window').width;
    let heightScreen = Dimensions.get('window').height;
    return (
      <Modal
        ref = {'myModal'}
        style ={{
            justifyContent: 'center',
            width: widthScreen-80,
            height: 280,
            shadowRadius: 10,
            borderRadius: 5
        }}
        backdrop = {true}
        position = 'center'
        onClosed = {()=>{console.log('close modal')}}
      >
            <Text style = {styles.titleText}>Modal Food</Text>
            <TextInput
                style={styles.textInput}
                placeholder=  'Press name food'
                underlineColorAndroid = 'transparent'
                value = {this.state.newFoodName}
                onChangeText = {(text) => {
                    this.setState(() => {
                        return {newFoodName: text}
                    })
                }}
            ></TextInput>
            <TextInput
                style={styles.textInput}
                placeholder =  'Press description food'
                underlineColorAndroid = 'transparent'
                value = {this.state.newDescription}
                onChangeText = {(text) => {
                    this.setState(() => {
                        return {newDescription: text}
                    })
                }}
            ></TextInput>
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <Button
                    color='#000'
                    title="Add food"
                    onPress = {()=>{
                        if(this.state.newFoodName=='' || this.state.newDescription =='' ){
                            console.log('');
                            return;
                        }
                        const newKey = this.gerenateID();
                        const addData= {
                            key: newKey,
                            name: this.state.newFoodName,
                            foodDescription: this.state.newDescription,
                            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Devonshire_tea.jpg/240px-Devonshire_tea.jpg',
                        }
                        FlatlistData.push(addData);
                        this.props.parentFlatlist.refresh(newKey);
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
        borderColor: 'gray',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 10,
    }
})