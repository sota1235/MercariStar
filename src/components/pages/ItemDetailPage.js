/**
 * @flow
 */
import React, { PropTypes } from 'react';
import { PropTypes as MobxPropTypes } from 'mobx-react';
import { FlatList, View, Text } from 'react-native';

import ItemTitleComponent from '../common/ItemTitleComponent';
import ItemImageComponent from '../common/ItemImageComponent';
import ItemPriceComponent from '../common/ItemPriceComponent';

const ItemDetailPage = ({ item }) => (
  <View>
    <ItemTitleComponent title={item.title} />
    <ItemImageComponent url={item.imageUrl} />
    <ItemPriceComponent price={item.price} />
  </View>
);

export default ItemDetailPage;
