import { Image, TouchableOpacity, View} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { colors } from '@/styles/colors'
import { Catetories } from '@/components/catetories'
import { Link } from '@/components/link'





export default function Index() {
  return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.logo} source={require('@/assets/logo.png')} />
            <TouchableOpacity activeOpacity={0.8}>
            <MaterialIcons name='add' size={32} color={colors.green[300]} />
            </TouchableOpacity>
        </View>

        <Catetories />     
        <Link name='Frantec' url='https://frantecit.com.br' onDetails={() => {console.log('clicou')}} />   
    </View>
  )
}


