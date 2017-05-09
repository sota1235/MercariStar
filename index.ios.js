/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { AudioRecorder, AudioUtils } from 'react-native-audio';
let audioPath = AudioUtils.DocumentDirectoryPath + '/test.aac';

AudioRecorder.prepareRecordingAtPath(audioPath, {
    SampleRate: 22050,
    Channels: 1,
    AudioQuality: "Low",
    AudioEncoding: "aac"
});

export default class MercariStar extends Component {
  state = {
    currentTime: 0.0,
    recording: false,
    hasPermission: false,
  };

  play = () => {
    console.log('test');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Play" onPress={this.play}>Play</Button>
        <Button title="Pause" onPress={() => {}}>Pause</Button>
        <Button title="Stop" onPress={() => {}}>Stop</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MercariStar', () => MercariStar);
