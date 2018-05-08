import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';

export default class App extends Component {
  state = {
    mapRegion: { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
    locationResult: null,
    location: {coords: { latitude: 37.78825, longitude: -122.4324}},
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
        this.setState({
        locationResult: 'Permission to access location was denied',
        location,
        });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location), location, });
 };

  render() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{ latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                onRegionChange={this._handleMapRegionChange}
            >
                <MapView.Marker
                    coordinate={this.state.location.coords}
                    title="My Marker"
                    description="Some description"
                />
            </MapView>
        
            <Text style = {{position: 'absolute', justifyContent: 'center', alignItems: 'center', bottom: 0}}>
                Location: {this.state.locationResult}
            </Text>
        
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
		// ...StyleSheet.absoluteFillObject,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'gray',
	},
	map: {
		...StyleSheet.absoluteFillObject
	},
});
