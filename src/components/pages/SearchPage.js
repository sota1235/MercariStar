/**
 * @flow
 */
import React, { PropTypes } from 'react';
import { FlatList, View, Text } from 'react-native';

const SearchPage = ({ items }) => (
  <View>
    <FlatList
      data={items}
      renderItem={({ item }) => <Text>{item.id}</Text>}
    />
  </View>
);

SearchPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default SearchPage;
