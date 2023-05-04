import { View, Text,Pressable,StyleSheet} from 'react-native'
import React from 'react'

export default function Button({children,onPress,style}) {
  return (
    <View style={[styles.container,style]}>
        <Pressable android_ripple={{color:'#210644'}} onPress={onPress} style={({pressed})=>[pressed&&styles.pressed]}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        borderRadius:10,
        overflow:'hidden',
        width:'100%',
    },
    text:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        padding:10
    }
})