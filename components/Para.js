import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

//This is paragraph componentt which styles the lines or para.

export default function Para({children}) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    text:{
        color:'white',
        fontSize:15,
        lineHeight:25,
        textAlign:'center'
    },
    textContainer:{
        width:'80%'
    }
})