/**
 * @flow
 */
import React, { PropTypes } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { PropTypes as MobxPropTypes } from 'mobx-react';
import Dimensions from 'Dimensions';

const styles = {
  container: {
    margin: 2,
    overflow: 'hidden',
    borderWidth: 0,
    borderRadius: 7,
  },
  image: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
  },
  priceBox: {
    paddingLeft: 5,
    paddingRight: 5,
    position: 'absolute',
    height: 15,
    bottom: 10,
    left: 10,
    overflow: 'hidden',
    backgroundColor:'gray',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'gray',
    opacity: 0.9,
  },
  price: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
  }
};

const ItemComponent = ({ handleOnPress, item }) => (
  <TouchableOpacity style={styles.container} onPress={(event) => { handleOnPress(event, item) }}>
    <Image
      style={styles.image}
      source={{url: item.image}}
    />
    <View style={styles.priceBox}>
      <Text style={styles.price}>¥{item.price}</Text>
    </View>
  </TouchableOpacity>
);

ItemComponent.propTypes = {
  handleOnPress: PropTypes.func,
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemComponent;
