import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { NavigationActions } from 'react-navigation';

import SearchPage from '../components/pages/SearchPage';

@inject('searchStore')
@inject('itemStore')
@observer
class Search extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });

  componentWillMount() {
    this.fetch();
  }

  fetch = () => {
    const {searchStore, navigation } = this.props;
    searchStore.fetch(navigation.state.params.keyword);
  };

  handleImagePress = (event, item) => {
    const { name, image, price } = item;
    this.props.itemStore.set(name, image, price );

    const { navigate } = this.props.navigation;
    navigate('ItemDetail', { title: name });
  }

  render() {
    const { navigate, setParams, state } = this.props.navigation;
    return (
      <View style={styles.container}>
        <SearchPage
          handleOnItemImagePress={this.handleImagePress}
          items={this.props.searchStore.products}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});

export default Search;
