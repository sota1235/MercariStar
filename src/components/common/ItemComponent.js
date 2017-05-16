/**
 * @flow
 */
import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';
import Dimensions from 'Dimensions';

const styles = {
  image: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
  },
};

const ItemComponent = ({ item }) => (
  <View>
    <Text>ID: {item.id}</Text>
    <Text>Price: {item.price}</Text>
    <Image
      style={styles.image}
      source={{url: item.image}}
    />
  </View>
);

ItemComponent.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemComponent;
