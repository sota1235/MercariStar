/**
 * @flow
 */
import React, { PropTypes } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Dimensions from 'Dimensions';

const buttonHeight = 50;

const styles = {
  button: {
    position: 'absolute',
    left: Dimensions.get('window').width / 2 - 75,
    bottom: -100,
    height: buttonHeight,
    width: 150,
    overflow: 'hidden',
    backgroundColor: 'red',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'red',
  },
  text: {
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    lineHeight: buttonHeight,
  },
};

const BuyButtonComponent = ({ handleOnPress }) => (
  <TouchableOpacity style={styles.button} onPress={handleOnPress}>
    <Text style={styles.text}>購入</Text>
  </TouchableOpacity>
);

BuyButtonComponent.propTypes = {
  handleOnPress: PropTypes.func.isRequired,
};

export default BuyButtonComponent;
