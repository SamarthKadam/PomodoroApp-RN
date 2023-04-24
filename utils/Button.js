import { View, Text,Pressable,StyleSheet} from 'react-native'
import React from 'react'

export default function Button({children,onPress}) {
  return (
    <View style={styles.container}>
        <Pressable android_ripple={{color:'#210644'}} onPress={onPress} style={({pressed})=>[pressed&&styles.pressed]}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        borderRadius:10,
        backgroundColor:'#00ADF8',
    },
    pressed:{
        // opacity:0.5
    },
    text:{
        color:'white',
        fontSize:24,
        textAlign:'center',
        padding:8
    }
})