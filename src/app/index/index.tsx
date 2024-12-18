import { Image, TouchableOpacity, View, FlatList, Modal, Text} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { colors } from '@/styles/colors'
import { Catetories } from '@/components/catetories'
import { Link } from '@/components/link'
import { Option } from '@/components/option'
import { router } from 'expo-router'
import { useState } from 'react'
import { categories } from '@/utils/categories'



export default function Index() {

  const [category, setCategory] = useState(categories[0].name)
  
  return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.logo} source={require('@/assets/logo.png')} />
              <TouchableOpacity activeOpacity={0.8} onPress={() => router.navigate("/add")}>
                <MaterialIcons name='add' size={32} color={colors.green[300]} />
            </TouchableOpacity>
        </View>

        <Catetories onChange={setCategory} selected={category}  />      


        <FlatList
          data={["1", "2", "3", "4"]}
          keyExtractor={(item) => item}
          renderItem={({item}) => <Link name='Frantec' url='https://frantecit.com.br' onDetails={() => {console.log('clicou')}} />  }
          style={styles.links}
          contentContainerStyle={styles.linksContent}
          showsVerticalScrollIndicator={false}
          />

          <Modal transparent visible={false}>
                <View style={styles.modalConteiner}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCatetoory}>Curso</Text>
                            <TouchableOpacity activeOpacity={0.8}>
                              <MaterialIcons name='close' size={20} color={colors.gray[400]} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalLinkName}>
                          FranteIT
                        </Text>
                        <Text style={styles.modalUrl}>
                            https://frantecit.com.br
                        </Text>
                        <View style={styles.modalFooter}>
                            <Option name='Abrir' icon='language' />
                            <Option name='Excluir' icon='delete' variant='secondary' />                            
                        </View>
                    </View>
                </View>
          </Modal>
          
    </View>
  )
}


