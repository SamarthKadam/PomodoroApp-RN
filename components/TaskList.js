import { View, Text,StyleSheet,Pressable} from 'react-native'
import React from 'react'
import { Color } from '../constants/Colors'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

//This component is used to display tasks which is styled.

export default function TaskList({id,title,time,priority,compltdinterval,interval,deleteTaskHandler,startTaskTimer,show,completed,deleteTaskFunction}) {


    let color;

    if(priority===2)
    {
        color=Color.green
    }
    else if(priority===1)
    {
        color=Color.yellow
    }
    else{
        color=Color.red
    }

  return (
      <Pressable onLongPress={deleteTaskHandler.bind(this,id)} style={styles.container}>
        <View>
        <FontAwesome name="circle" size={24} color={color} />
        </View>
        <View style={styles.titleContainer}>
            <Text style={[styles.textColor]}>{title}</Text>
            <Text style={[styles.smColor]}>{Math.floor(time/60)} Minutes</Text>
        </View>
        <View style={styles.timercontainer}>
            <Text style={styles.textColor}>{compltdinterval}/{interval}</Text>
            <Text style={[styles.smColor]}>25 min</Text>
        </View>
        <View>
        {show&&!completed&&<Pressable onPress={startTaskTimer.bind(this,id)}><AntDesign name="playcircleo" size={24} color={Color.secondary800} /></Pressable>}
        {completed?<MaterialIcons onPress={deleteTaskFunction.bind(this,id)} name='cancel' size={24} color='white'></MaterialIcons>:null}
        </View>
      </Pressable>
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