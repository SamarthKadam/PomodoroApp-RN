import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Color } from '../constants/Colors'

export default function Timer() {
  return (
    <View style={styles.screen}>
    </View>
  )
}
const styles=StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:Color.primary800
  }
})