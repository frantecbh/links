import React from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';

type CategoriesProps = PressableProps & {
  name: string
  isSelected?: Boolean
  icon: keyof typeof MaterialIcons.glyphMap
}

export function Category({name, icon, isSelected = false, ...rest}: CategoriesProps) {

  const color = isSelected ? colors.green[300] : colors.gray[400]

  return ( 
      <Pressable style={styles.container} {...rest} >
        <MaterialIcons name={icon} size={16} color={color} />
        <Text style={[styles.name, {color}]}>
          {name}
        </Text>
      </Pressable>

   
  );
}