import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import { NavigationActions } from 'react-navigation';

import ItemDetailPage from '../components/pages/ItemDetailPage';

@inject('itemStore')
@observer
class ItemDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });

  buyAction = () => {
    alert('お金が足りません :(');
  };

  render() {
    const item = this.props.itemStore.item;
    return (
      <View style={styles.container}>
        <ItemDetailPage item={item} handlePressBuyButton={this.buyAction} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});

export default ItemDetail;
