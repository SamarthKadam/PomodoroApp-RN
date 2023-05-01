import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Color } from '../constants/Colors'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function IconButton({style,onPressBack,onPressTick}) {
  return (
    <View style={style}>
     <Pressable onPress={onPressBack}><AntDesign name="left" size={28} color={Color.secondary800} /></Pressable>
     <Pressable onPress={onPressTick}><FontAwesome5 name="check" size={28} color={Color.secondary800} /></Pressable> 
      </View>
  )
}