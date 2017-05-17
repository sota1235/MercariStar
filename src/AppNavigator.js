import { StackNavigator } from 'react-navigation';
import Recording from './containers/Recording';
import Search from './containers/Search';
import ItemDetail from './containers/ItemDetail';

const AppNavigator = StackNavigator(
  {
    Recording: { screen: Recording },
    Search: { screen: Search },
    ItemDetail: { screen: ItemDetail },
  },
  {
    headerMode: 'screen',
  },
);

export default AppNavigator;
