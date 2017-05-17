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
  componentWillMount() {
    this.fetch();
  }

  fetch = () => {
    this.props.searchStore.fetch('bose');
  };

  handleImagePress = (event, item) => {
    this.props.itemStore.set(item);

    const { navigate } = this.props.navigation;
    navigate('ItemDetail');
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
    marginTop: 50,
  },
});

export default Search;
