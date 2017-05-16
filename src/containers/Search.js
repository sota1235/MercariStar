import React, { Component } from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet } from 'react-native';

import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('searchStore')
@observer
class SearchScene extends Component {
  fetch = () => {
    this.props.searchStore.fetch('bose');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.searchStore.products.length}</Text>
        <Button title="Ferch" onPress={this.fetch}>Fetch</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

export default SearchScene;
