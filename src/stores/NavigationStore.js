import { action, observable } from 'mobx';
import AppNavigator from './../AppNavigator';

export default class NavigationStore {
  @observable.ref
  navigationState = {
    index: 0,
    routes: [{ key: 'Search', routeName: 'Search' }],
  };

  @action dispatch = (action, stackNavState = true) => {
    const previousNavState = stackNavState ? this.navigationState : null;
    return (this.navigationState = AppNavigator.router.getStateForAction(
      action,
      previousNavState,
    ));
  };
}
