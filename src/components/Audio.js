import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants, Audio, MapView } from 'expo';
import { Card } from "react-native-elements";

export default class Audios extends React.Component {
  state = {
    mapRegion: { latitude: 37.8715926, longitude: -122.272747, latitudeDelta: 0.1, longitudeDelta: 0.1 }
  };

  _handlePlaySoundAsync = async () => {
    await Audio.setIsEnabledAsync(true);
    let sound = new Audio.Sound();
    await sound.loadAsync({
      uri: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3',
    });
    await sound.playAsync();
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  render() {
    return (
      <View style={styles.container}>
      
        <MapView
          style={{ alignSelf: 'stretch', height: 200 }}
          region={this.state.mapRegion}
          onRegionChange={this._handleMapRegionChange}
        />
      
        <Text style={styles.paragraph}>
          Quest Location
        </Text>
        <Card title="Local Modules">
          <Button
            title="Play a sound!"
            onPress={this._handlePlaySoundAsync}
          />
        
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});