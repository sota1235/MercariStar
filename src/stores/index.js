import SearchStore from './SearchStore';
import NavigationStore from './NavigationStore';
import ItemStore from './ItemStore';
import ClarifaiStore from './ClarifaiStore';

export default {
  searchStore     : new SearchStore(),
  navigationStore : new NavigationStore(),
  itemStore       : new ItemStore(),
  clarifaiStore   : new ClarifaiStore(),
};
