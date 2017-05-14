import { observable, action } from 'mobx';
import { search } from './../services/search';

export default class SearchStore {
  @observable query = '';
  @observable products = [];

  @action async fetch(keyword){
    try {
      let response = await search(keyword);
      let responseJson = await response.json();
      this.products = responseJson.data;
    } catch (error) {
      console.error(error);
    }
  }
}
