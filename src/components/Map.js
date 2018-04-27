import React from "react"; 
import { StyleSheet, Text } from "react-native"; 
import { MapView, Constants } from 'expo';
// import MapView from 'react-native-maps';

export default class MapScreen extends React.Component {
      render() {
        return (
          <MapView
            style = { styles.container }
            provider = { MapView.PROVIDER_GOOGLE }
            customMapStyle = { generatedMapStyle }
          />
        );
    } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

const generatedMapStyle = ['https://maps.googleapis.com/maps/api/geocode/json?&address=65%20phan%20b%E1%BB%99i%20ch%C3%A2u%20Vinh%20Ngh%E1%BB%87%20an'];