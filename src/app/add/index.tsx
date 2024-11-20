import {  Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'
import { router } from 'expo-router'
import { Catetories } from '@/components/catetories'
import { Input } from '@/components/input'
import { Button } from '@/components/button'

export default function Add() {
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')

  const handleAdd = () => {
    console.log({
      name,
      url
    })
  }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <MaterialIcons name='arrow-back' size={32} color={colors.gray[200]}  />
            </TouchableOpacity>
            <Text style={styles.title}>Novo</Text>
        </View>
        <Text style={styles.label}>Selecione uma categoria</Text>
        <Catetories onChange={setCategory} selected={category}  />
        <View style={styles.form}>
           <Input placeholder='Nome' onChangeText={setName} autoCorrect={false} />
           <Input placeholder='URL' onChangeText={setUrl} autoCorrect={false} />
           <Button title='Adicionar' onPress={handleAdd} />
        </View>
       
    </View>
  )
}

