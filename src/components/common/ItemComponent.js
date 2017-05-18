/**
 * @flow
 */
import React, { PropTypes } from 'react';
import { View, Text, Image } from 'react-native';

const ItemComponent = ({ item }) => (
  <View>
    <Text>ID: {item.id}</Text>
    <Text>Price: {item.price}</Text>
    <Image source={{url: item.image}} />
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
