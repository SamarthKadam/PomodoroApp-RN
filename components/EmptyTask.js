import { View, Text,Image,StyleSheet} from 'react-native'
import React from 'react'

//This is component to be rendered when tasks are not added yet

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
        marginTop:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        height:250,
        width:250
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