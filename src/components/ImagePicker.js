import { ImagePicker } from 'expo'
import React from 'react'
import { Image, Button, StyleSheet, View } from 'react-native'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      uri: 'http://lorempixel.com/output/cats-h-c-320-640-1.jpg'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.picture} source={{uri: this.state.uri}}/>
        <Button title="Select Image" onPress={this._selectPicture}/>
        <Button title="Take Picture" onPress={this._takePicture}/>
      </View>
    )
  }

  /**
   * Select picture from image library
   */
   _selectPicture = async () => {
    const result = await ImagePicker.launchImageLibraryAsync()
    if (!result.cancelled) {
      await this._setImage(result.uri)
    }
  }

  /**
   * Get picture from camera
   */
   _takePicture = async () => {
    const result = await ImagePicker.launchCameraAsync()
    if (!result.cancelled) {
      await this._setImage(result.uri)
    }
  }

  /**
   * Dispay picture
   * @param {string} uri 
   */
  _setImage = (uri) => {
    this.setState({uri})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  picture: {
    ...StyleSheet.absoluteFillObject
  }

})