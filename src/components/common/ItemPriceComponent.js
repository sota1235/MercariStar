/**
 * @flow
 */
import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

const styles = {
  price: {
    margin: 20,
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  }
};

const ItemPriceComponent = ({ price }) => (
  <View>
    <Text style={styles.price}>￥{price}</Text>
  </View>
);

ItemPriceComponent.propTypes = {
  price: PropTypes.string.isRequired,
};

export default ItemPriceComponent;
