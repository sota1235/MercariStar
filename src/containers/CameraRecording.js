import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import { observer, inject } from 'mobx-react';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Tags } from './../components/common/Tags';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  activityIndicatorWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
  cameraWrap: {
    height: 50,
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    right: 0,
    // top: 0,
    bottom: 50,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  shootIcon: {
    color: '#ffffff',
  },
});

@inject('clarifaiStore')
@observer
class CameraRecording extends Component {
  state = {
    animating: true,
  };

  takePicture = () => {
    this.camera
      .capture()
      .then((data) => {
        this.props.clarifaiStore.post(data.data);
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(camera) => {
            this.camera = camera;
          }}
          style={styles.preview}
          captureTarget={Camera.constants.CaptureTarget.memory}
          aspect={Camera.constants.Aspect.fill}
        >
          <Tags
            data={this.props.clarifaiStore.concepts}
            onPress={(name) => console.log(name)}
          />
        </Camera>
        {this.props.clarifaiStore.isLoading === true &&
          <View style={styles.activityIndicatorWrap}>
            <ActivityIndicator
              animating={this.state.animating}
              style={[styles.activityIndicator]}
              size="large"
            />
          </View>}
        {this.props.clarifaiStore.isLoading === false &&
          <View style={styles.cameraWrap}>
            <TouchableOpacity onPress={this.takePicture}>
              <Icon name="camera" size={50} style={styles.shootIcon} />
            </TouchableOpacity>
          </View>}
      </View>
    );
  }
}

CameraRecording.propTypes = {};

export default CameraRecording;
