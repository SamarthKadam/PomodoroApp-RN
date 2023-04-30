import { View, Text,StyleSheet} from 'react-native'
import React from 'react'

export default function Greet({children}) {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    text:{
        color:'white',
        fontSize:34,
        fontWeight:'700'
    }
})