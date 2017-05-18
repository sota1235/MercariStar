/**
 * @flow
 */
import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

const styles = {
  title: {
    color: 'gray',
    fontSize: 15,
    textAlign: 'center',
  }
};

const ItemTitleComponent = ({ title }) => (
  <View>
    <Text style={styles.title}>{title}</Text>
  </View>
);

ItemTitleComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ItemTitleComponent;
