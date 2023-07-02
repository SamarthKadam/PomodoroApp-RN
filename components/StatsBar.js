import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import { Color } from '../constants/Colors'

//This is statsBar component

export default function StatsBar({val,description}) {
  return (
    <View style={styles.container}>
        <View><Text style={styles.text}>{description}</Text></View>
        <View><Text style={styles.num}>{val}</Text></View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:Color.primary600,
        paddingHorizontal:18,
        alignItems:'center',
        justifyContent:'space-between',
        paddingVertical:12,
        borderRadius:8,
        marginVertical:6
    },
    num:{
        color:'white',
        fontSize:38,
        fontWeight:'700'
    },
    text:{
        color:'white',
        fontSize:14,
        fontWeight:'300'
    }
})