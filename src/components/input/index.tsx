import { TextInput, TextInputProps } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { colors } from '@/styles/colors'

export const Input = ({...rest}: TextInputProps) => {
  return (
   <TextInput 
   style={styles.container}
   placeholderTextColor={colors.gray[400]}
   {...rest} />
  )
}
