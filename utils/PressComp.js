import { Pressable,View} from 'react-native'
import React from 'react'

export default function PressComp({children,onPress,id,style}) {
  return (
    <Pressable style={style} onPress={onPress.bind(this,id)}>
      {children}
     </Pressable>
  )
}