import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { NavigationActions } from 'react-navigation';

import SearchPage from '../components/pages/SearchPage';

@inject('searchStore')
@observer
class Search extends Component {
  fetch = () => {
    this.props.searchStore.fetch('bose');
  };
  render() {
    const { navigate, setParams, state } = this.props.navigation;
    console.log(this.props.searchStore.products);
    return (
      <View style={styles.container}>
        <Text>{this.props.searchStore.products.length}</Text>
        <SearchPage items={this.props.searchStore.products} />
        <Button title="Ferch" onPress={this.fetch}>Fetch</Button>

        <TouchableOpacity
          onPress={() =>
            navigate('Recording', { title: 'Recording', parentKey: state.key })}
        >
          <Text>Recording</Text>
        </TouchableOpacity>
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
