import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight,Dimensions, Image } from 'react-native';

// WP REST API 
const REQUEST_URL  = 'https://oanglelab.com/oa003-yogaseeds/wp-json/wp/v2/media';

const windowSize = Dimensions.get('window');

export default class LeadershipCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      card: null,
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({
      card: null,
    });
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
          console.log(responseData);
        this.setState({
          card: { pic: responseData[0].guid.rendered }
        });
      })
    .done();
  }

  render() {
    if ( !this.state.card ) {
      return this.renderLoadingView();
    }
    return this.renderCard();
  }

  renderLoadingView = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Wait for it...
        </Text>
      </View>
    );
  }

  renderCard = () => {
    let quote = this.state.card.pic;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image style={{width: windowSize.width, height: windowSize.height}} source={{uri: this.state.card.pic}}  />
        
            <View style={styles.buttonContainer}>
            <TouchableHighlight
                style={styles.button}
                underlayColor='#ccc'
                onPress={this.fetchData}
            >
                <Text style={styles.buttonText}>Next quote </Text>
            </TouchableHighlight>
            </View>
        </View>
      </View>
    );
  
};
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  imageContainer: {
    alignItems: 'center',
    flex: 1,
    width: windowSize.width,
    height: windowSize.height,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    flex: .1,
    width: windowSize.width,
    backgroundColor: '#1488BC',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 30,
    color: '#FFFFFF',
  }
});