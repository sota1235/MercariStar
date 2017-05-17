import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { NavigationActions } from 'react-navigation';

import ItemDetailPage from '../components/pages/ItemDetailPage';

@inject('itemStore')
@observer
class ItemDetail extends Component {
  render() {
    const item = this.props.itemStore.item;
    return (
      <View style={styles.container}>
        <ItemDetailPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});

export default ItemDetail;
