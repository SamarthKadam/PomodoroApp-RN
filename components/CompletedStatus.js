import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

//This is component to be rendered when the user completes its all tasks

export default function CompletedStatus() {
  return (
    <View style={styles.container}>
      <Ionicons style={styles.iconStyle} name="checkmark-circle-sharp" size={28} color="#005E38" />
      <Text style={styles.bgText}>Well done!</Text>
      <Text style={styles.smText}>"Congratulations! You've completed all your tasks! Add some more and complete.</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#03A55A',
        borderRadius:20,
        paddingHorizontal:20,
        paddingVertical:10,
        marginTop:20
    },
    bgText:{
        fontSize:24,
        textAlign:'center',
        color:'white',
        fontWeight:'600'
    },
    smText:{
        marginTop:5,
        fontSize:14,
        color:'white',
        lineHeight:20
    },
    iconStyle:{
      position:'absolute',
      top:10,
      left:20
    }
})