import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import { PropTypes as MobxPropTypes } from "mobx-react";
import TagsItem from './TagsItem';


const tagsStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  listContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
});

const Tags = props => (
  <View
    style={tagsStyles.container}
  >
    <FlatList
      contentContainerStyle={tagsStyles.listContainer}
      data={props.data}
      renderItem={({ item }) => <TagsItem onPress={props.onPress} {...item} />}
    />
  </View>
);

Tags.propTypes = {
  data: MobxPropTypes.observableArray,
  onPress: PropTypes.func,
};

export default Tags;
