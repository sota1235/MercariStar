import { observable, action } from 'mobx';

export default class ItemStore {
  @observable item = {};

  @action set(item) {
    this.item = {};
  }
}
