import { Text, View} from 'react-native'
import { styles } from './styles'

export default function Index() {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Ola!</Text>
      <Text style={styles.title}> Frantec!</Text>
    </View>
  )
}

