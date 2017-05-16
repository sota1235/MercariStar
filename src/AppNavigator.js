import { StackNavigator } from 'react-navigation';
import Recording from './containers/Recording';
import ItemDetail from './containers/ItemDetail';
import CameraRecording from './containers/CameraRecording';

const AppNavigator = StackNavigator(
  {
    Recording: { screen: Recording },
    // Search: { screen: Search },
    ItemDetail: { screen: ItemDetail },
    Search: { screen: CameraRecording, navigationOptions: { title: 'Welcome', header: null }},
  },
  {
    headerMode: 'screen',
  },
);

export default AppNavigator;
