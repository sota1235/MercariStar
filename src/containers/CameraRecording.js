import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';
import Clarifai from 'clarifai';
import { Tags } from './../components/common/Tags';

import {
  CLARIFAI_ID,
  CLARIFAI_SECRET,
  YANDEX_TRANSLATE_KEY,
} from './../../env';

const filterOutNoConcepts = concepts =>
  concepts.filter((concept) => {
    concept.val = concept.val.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]; // keeping only 2 digits after decimal
    return !concept.name.startsWith('no ');
  });

const postImage = (imageData) => {
  const ClarifaiApp = new Clarifai.App(CLARIFAI_ID, CLARIFAI_SECRET);
  ClarifaiApp.models
    .predict(
      { id: Clarifai.GENERAL_MODEL, language: 'ja' },
      { base64: imageData },
    )
    .then(
      (response) => {
        const concepts = response.data.outputs[0].data.concepts
          .slice(0, 10)
          .map(concept => ({
            name: concept.name,
            val: concept.value,
          }));

        const cleanConcept = filterOutNoConcepts(concepts);
      },
      (err) => {
        console.warn(err);
      },
    );
};

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

class CameraRecording extends Component {
  state = {
    shootIconVisibile: true,
  };

  takePicture() {
    this.camera
      .capture()
      .then(data => postImage(data.data))
      .catch(err => console.error(err));
  }

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
          <Tags data={[{ key: 1, value: 'one' }, { key: 2, value: 'two three' }]} />
          {this.state.shootIconVisibile &&
            <View style={styles.cameraWrap}>
              <TouchableOpacity onPress={this.takePicture}>
                <Icon name="camera" size={50} style={styles.shootIcon} />
              </TouchableOpacity>
            </View>}
        </Camera>
      </View>
    );
  }
}

CameraRecording.propTypes = {
};

export default CameraRecording;
