import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import { Color } from '../constants/Colors'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function TaskList({id,title,time,priority,interval}) {


    let color;

    if(priority==='low')
    {
        color=Color.green
    }
    else if(priority==='medium')
    {
        color=Color.yellow
    }
    else{
        color=Color.red
    }

  return (
      <View style={styles.container}>
        <View>
        <FontAwesome name="circle" size={24} color={color} />
        </View>
        <View style={styles.titleContainer}>
            <Text style={[styles.textColor]}>{title}</Text>
            <Text style={[styles.smColor]}>{time} Minutes</Text>
        </View>
        <View style={styles.timercontainer}>
            <Text style={styles.textColor}>1/4</Text>
            <Text style={[styles.smColor]}>25 min</Text>
        </View>
        <View>
        <AntDesign name="playcircleo" size={24} color={Color.secondary800} />
        </View>
      </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:12,
        paddingHorizontal:10,
        borderRadius:6,
        paddingVertical:10,
        backgroundColor:Color.primary600
    },
    textColor:{
        color:'white'
    },
    smColor:{
        color:'#A1A1A1'
    },
    timercontainer:{
        flexDirection:'column',
        alignItems:'flex-end',
        width:'18%'
    },
    titleContainer:{
        width:'50%',
    }
})