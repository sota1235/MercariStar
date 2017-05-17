import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const tagsItemStyles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    opacity: 0.5,
    padding: 10,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    marginTop: 5,
  },
  detail: {
    color: 'white',
  },
});
const TagsItem = props => (
  <View style={tagsItemStyles.container}>
    <TouchableOpacity onPress={props.onPress}>
      <Text style={tagsItemStyles.detail}>
        {props.name}
      </Text>
    </TouchableOpacity>
  </View>
);

TagsItem.propTypes = {
  value: PropTypes.string,
  onPress: PropTypes.func,
};

export default TagsItem;
