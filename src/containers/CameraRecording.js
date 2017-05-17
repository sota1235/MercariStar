import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
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
  cameraWrap: {
    height: 50,
    backgroundColor: 'transparent',
  },
  shootIcon: {
    color: '#ffffff',
  },
});

@inject('clarifaiStore')
@observer
class CameraRecording extends Component {

  takePicture = () => {
    this.props.clarifaiStore.setLoading(!this.props.clarifaiStore.isLoading);
    // this.camera
    //   .capture()
    //   .then(data => {
    //     this.props.clarifaiStore.setLoading(true);
    //     this.props.clarifaiStore.post(data.data);
    //   })
    //   .catch(err => console.error(err));
  }

  render() {

    let button = null;
    if(this.props.clarifaiStore.isLoading === true){
      button = <Text>{this.props.clarifaiStore.isLoading === true? 'test': ''}</Text>
    }

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
          {button}
          <Tags data={this.props.clarifaiStore.concepts} onPress={() => console.log(999)}/>
          {
            <View style={styles.cameraWrap}>
              <TouchableOpacity onPress={this.takePicture}>
                <Icon name="camera" size={50} style={styles.shootIcon} />
              </TouchableOpacity>
            </View>
          }
        </Camera>
      </View>
    );
  }
}

CameraRecording.propTypes = {
};

export default CameraRecording;
