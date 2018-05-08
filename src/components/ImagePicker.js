import { ImagePicker } from 'expo'
import React from 'react'
import { Image,  StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        
        <View style = {{marginBottom: 20}}>
            <Button
                titleStyle={{ fontWeight: "700" }}
                buttonStyle={{
                  backgroundColor: "rgba(92, 99,216, 1)",
                  width: 300,
                  height: 45,
                  borderColor: "transparent",
                  borderWidth: 0,
                  borderRadius: 5
                }}
                containerStyle={{ marginTop: 20, marginBottom: 20 }}
                title="Select Image"
                onPress={this._selectPicture}
            />
          </View>
          <View style = {{marginBottom: 20}}>
            <Button 
                  titleStyle={{ fontWeight: "700" }}
                  buttonStyle={{
                    backgroundColor: "rgba(92, 99,216, 1)",
                    width: 300,
                    height: 45,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 5
                }}
                containerStyle={{ marginTop: 20, marginBottom: 20 }}
                title="Take Picture" 
                onPress={this._takePicture}

              />
        </View>
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
  btn: {
    padding: 5,
    marginBottom: 5,
  },
  picture: {
    // ...StyleSheet.absoluteFillObject
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }

})