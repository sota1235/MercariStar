import SearchStore from './SearchStore';
import NavigationStore from './NavigationStore';
import ItemStore from './ItemStore';

export default {
  searchStore     : new SearchStore(),
  navigationStore : new NavigationStore(),
  itemStore       : new ItemStore(),
};
