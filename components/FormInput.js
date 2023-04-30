import { View,StyleSheet} from 'react-native'
import React from 'react'
import Greet from '../utils/Greet'

export default function FormInput() {
  return (
    <View style={styles.formContainer}>
      <Greet>New Task</Greet>
    </View>
  )
}

const styles=StyleSheet.create({
    formContainer:{
        paddingTop:54,
        paddingHorizontal:24
    }
})