import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

function renderCategoryItem(item) {
  return
}

function CategoriesScreen(){
  return <FlatList data={CATEGORIES} KeyExtractor={(item) => item.id} renderItem={} />
}

export default CategoriesScreen;