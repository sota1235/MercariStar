/**
 * @flow
 */
import React, { PropTypes } from 'react';
import { FlatList, View, Text } from 'react-native';
import ItemComponent from '../common/ItemComponent';


const SearchPage = ({ items }) => (
  <View>
    <FlatList
      data={items}
      renderItem={
        ({ item }) => <ItemComponent item={item} />
      }
      numColumns={3}
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
