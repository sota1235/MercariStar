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
  View,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import { AudioRecorder, AudioUtils } from 'react-native-audio';

let audioPath = AudioUtils.DocumentDirectoryPath + '/test.aac';

const startRecord = audioPath => {
  AudioRecorder.prepareRecordingAtPath(audioPath, {
    SampleRate: 22050,
    Channels: 1,
    AudioQuality: "Low",
    AudioEncoding: "aac"
  });
};

export default class MercariStar extends Component {

  state = {
    currentTime: 0.0,
    recording: false,
    hasPermission: false,
  };

  componentWillMount() {
    console.log(`path: ${audioPath}`);
  }

  componentDidMount() {
    this.checkPermission().then((hasPermission) => {
      if (!hasPermission) {
        // TODO: Show the user that the recording will not work.
        console.log('[Android] Microphone permission denined');
        return;
      }

      startRecord(audioPath);

      AudioRecorder.onProgress = this.onProgress;
      AudioRecorder.onFinished = this.onFinished;
    });
  }

  onProgress = (data) => {
    console.log('onProgress', data);
  }

  onFinished = (data) => {
    console.log('onFinished', data);
  }

  isAndroid = () => Platform.OS === 'android';

  checkPermission = () => {
    if (!this.isAndroid()) {
      return Promise.resolve(true);
    }

    const rationale = {
      'title': 'Microphone Permission',
      'message': 'AudioExample needs access to your microphone so you can record audio.'
    };

    return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, rationale)
      .then((result) => {
        console.log('Permission result:', result);
        return (result === true || result === PermissionsAndroid.RESULTS.GRANTED);
      });
  }

  play = async () => {
    try {
      const filePath = await AudioRecorder.startRecording();
    } catch (error) {
      console.error(error);
    }
  }

  stop = async () => {
    try {
      const filePath = await AudioRecorder.stopRecording();
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Play" onPress={this.play}>Play</Button>
        <Button title="Pause" onPress={() => {}}>Pause</Button>
        <Button title="Stop" onPress={this.stop}>Stop</Button>
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
