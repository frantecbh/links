
import { Text, TouchableOpacity,TouchableOpacityProps } from 'react-native'
import { styles } from './styles'


type ButtonProps = TouchableOpacityProps & {
  title: string
}

export const Button = ({title, ...rest}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} {...rest} activeOpacity={0.7}>
      <Text style={styles.title}>
        {title}
      </Text>     
    </TouchableOpacity>
  )
}

