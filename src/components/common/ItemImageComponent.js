/**
 * @flow
 */
import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';
import Dimensions from 'Dimensions';

const styles = {
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  }
};

const ItemImageComponent = ({ url }) => (
  <View>
    <Image
      style={styles.image}
      source={{url}}
    />
  </View>
);

ItemImageComponent.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ItemImageComponent;
