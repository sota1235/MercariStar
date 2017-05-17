import { StackNavigator } from 'react-navigation';
// import Recording from './containers/Recording';
import Search from './containers/Search';
import ItemDetail from './containers/ItemDetail';
import CameraRecording from './containers/CameraRecording';

const AppNavigator = StackNavigator(
  {
    CameraRecording: {
      screen: CameraRecording,
      navigationOptions: { header: null },
    },
    Search: { screen: Search },
    ItemDetail: { screen: ItemDetail },
  },
  {
    headerMode: 'screen',
  },
);

export default AppNavigator;
