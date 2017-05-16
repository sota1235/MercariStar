import { StackNavigator } from 'react-navigation';
import Recording from './containers/Recording';
import Search from './containers/Search';

const AppNavigator = StackNavigator(
  {
    Recording: { screen: Recording },
    Search: { screen: Search },
  },
  {
    headerMode: 'screen',
  },
);

export default AppNavigator;
