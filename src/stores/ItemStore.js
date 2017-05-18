import { observable, action } from 'mobx';

export default class ItemStore {
  @observable item = {
    title: '',
    imageUrl: '',
    price: '',
  };

  @action set(title, imageUrl, price) {
    this.item = {
      title, imageUrl, price,
    };
  }
}
