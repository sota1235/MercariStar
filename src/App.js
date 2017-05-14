/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import stores from './stores';
import SearchScene from './components/scene/SearchScene';
import { search } from './services/search';

class App extends Component {
  render(){
    return (
      <Provider {...stores}>
        <SearchScene />
      </Provider>
    )
  }
}

export default App;
