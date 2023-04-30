import { View, Text,Image,StyleSheet} from 'react-native'
import React from 'react'

export default function EmptyTask() {
  return (
    <View style={styles.container}>
        <View>
        <Image style={styles.image} source={require('../assets/office.png')}></Image>
        <Text style={styles.boldtext}>A fresh start</Text>
        <Text style={styles.thinText}>Anything to add?</Text>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        marginTop:30,
        flexDirection:'row',
        justifyContent:'center'
    },
    image:{
        height:200,
        width:200
    },
    boldtext:{
        fontSize:22,
        fontWeight:'700',
        color:'white',
        marginTop:18,
        textAlign:'center'
    },
    thinText:{
        color:'white',
        textAlign:'center',
        marginTop:8,
        fontWeight:300
    }
})