import { View,StyleSheet} from 'react-native'
import React from 'react'
import { Color } from '../constants/Colors'
import FormInput from '../components/FormInput'

export default function AddTask() {

  return (
    <View style={styles.screen}>
        <FormInput></FormInput>
    </View>
  )
}

const styles=StyleSheet.create({
    screen:{
      flex:1,
      backgroundColor:Color.primary800
    }
  })