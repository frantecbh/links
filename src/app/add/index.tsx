import {  Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { router } from 'expo-router'
import { Catetories } from '@/components/catetories'
import { Input } from '@/components/input'

export default function Add() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <MaterialIcons name='arrow-back' size={32} color={colors.gray[200]}  />
            </TouchableOpacity>
            <Text style={styles.title}>Novo</Text>
        </View>
        <Text style={styles.label}>Selecione uma categoria</Text>
        <Catetories />
        <View style={styles.form}>
           <Input placeholder='Nome' />
           <Input placeholder='URL' />
        </View>
    </View>
  )
}

