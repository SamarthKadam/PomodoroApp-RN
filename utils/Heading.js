import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'

export default function Heading({children,style}) {

  return (
    <View style={style}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    text:{
        fontSize:18,
        marginTop:14,
        fontWeight:'600',
        color:'white'
    }
})