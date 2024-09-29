import React from 'react';
import { FlatList, View } from 'react-native';

import { styles } from './styles';
import { categories } from '@/utils/categories';
import { Category } from '../category';

export function Catetories() {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Category name={item.name} icon={item.icon} isSelected={false} />}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />

  
  );
}