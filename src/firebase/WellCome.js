import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import firebaseApp from './firebaseApp';

class WellCome extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
                <Text>WellCome</Text>
            </View>
        );
    }
}

export default WellCome;