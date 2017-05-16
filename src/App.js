import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { observer, Provider } from 'mobx-react';
import stores from './stores';
import AppNavigator from './AppNavigator';

@observer class App extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <AppNavigator
          navigation={addNavigationHelpers({
          dispatch: stores.navigationStore.dispatch,
          state: stores.navigationStore.navigationState,
        })}
        />
      </Provider>
    );
  }
}

export default App;
