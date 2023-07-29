import { View,StyleSheet,Text, TextInput, KeyboardAvoidingView} from 'react-native'
import React from 'react'
import Greet from '../utils/Greet'
import { Color } from '../constants/Colors'
import Heading from '../utils/Heading'
import PressComp from '../utils/PressComp'
import { useState } from 'react'
import { useLayoutEffect } from 'react'
import IconButton from '../utils/IconButton'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native'

export default function FormInput({onaddTask}) {

  const navigation=useNavigation();
  //navigation which is imported from useNavigation used for moving between screens

  const[activePriority,setActivePriority]=useState(-1);
  const[taskName,setTaskName]=useState();
  const[times,setTimes]=useState();
  const[breaktime,setBreakTime]=useState();

  //Above are input variables to store input given by the user using useState.




  function EvaluateData()
  {

    if(!taskName || !isNaN(taskName))
    {
      Alert.alert('Invalid Details','Please check your inputs')
      return;
    }
    if(activePriority==-1 || !times||!breaktime)
    {
      Alert.alert('Invalid Details','Please check your inputs')
      return 
    }

    onaddTask({title:taskName,interval:times,time:0,compltdinterval:0,completed:false,priority:activePriority,breaktime:breaktime})
  }

  //EvaluateData evaluates the data wheather the information provided is valid or not




  useLayoutEffect(()=>{
    navigation.setOptions({
      header:()=>{return <IconButton onPressTick={EvaluateData} onPressBack={()=>{navigation.navigate("List")}} style={styles.container}></IconButton> }
    })

  },[navigation,EvaluateData])



  function selectionLevel(id)
  {
    let val=Number(id);
    setActivePriority(val)

  }

  function taskNameInputHandler(enteredText)
  {
    setTaskName(enteredText);
  }


  function timeInputHandler(time)
  {
    setTimes(time)
  }

  function breakInputHandler(breakt)
  {
    setBreakTime(breakt);
  }

  ///above are handlers for setting the inputs in states mentioned at the top


  return (
    <View style={styles.formContainer}>
      <Greet>New Task</Greet>
      <View style={styles.Container}>
        <View><Text style={styles.boldText}>Task Name</Text></View>
        <View style={styles.textInputContainer}><TextInput value={taskName} onChangeText={taskNameInputHandler} placeholderTextColor='#A1A1A1' style={styles.thinTextInput} placeholder='Short description'></TextInput></View>
      </View>
      <Heading style={styles.headingstyle}>Task priority</Heading>
      <View style={[styles.Container,styles.row]}>
       <PressComp id='0' onPress={selectionLevel} style={[styles.levelContainer,activePriority===0?styles.bgred:null]}><Text style={styles.leveltxt}>High</Text></PressComp>
       <PressComp id='1' onPress={selectionLevel} style={[styles.levelContainer,activePriority===1?styles.bgyel:null]}><Text style={styles.leveltxt}>Medium </Text></PressComp>
       <PressComp id='2' onPress={selectionLevel} style={[styles.levelContainer,activePriority===2?styles.bggreen:null]}><Text style={styles.leveltxt}>Low </Text></PressComp>
      </View>
      <KeyboardAvoidingView behavior="padding">
      <View style={[styles.Container,styles.alignCen]}>
        <View><Text style={styles.boldText}>No of times (Repeatations)</Text></View>
        <View style={styles.numberTextInputContainer}><TextInput value={times} onChangeText={timeInputHandler} style={styles.NumberTextInput} keyboardType="number-pad" maxLength={1}></TextInput></View>
      </View>
      <View style={[styles.Container,styles.alignCen]}>
        <View><Text style={styles.boldText}>Short break (Minutes)</Text></View>
        <View style={styles.numberTextInputContainer}><TextInput value={breaktime} onChangeText={breakInputHandler} style={styles.NumberTextInput} keyboardType="number-pad" maxLength={1}></TextInput></View>
      </View>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    paddingTop:64,
    paddingHorizontal:18,
    backgroundColor:Color.primary800,
    height:100,
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%'
  },
    formContainer:{
        paddingHorizontal:18
    },
    Container:{
      backgroundColor:Color.primary600,
      marginTop:24,
      borderRadius:6,
      paddingVertical:14,
      paddingHorizontal:10,
      width:'100%',
    },
    boldText:{
      color:'white',
      fontSize:16,
    },
    thinTextInput:{
      color:'white',
      fontSize:14,
      fontWeight:'300'
    },
    textInputContainer:{
      marginTop:12
    },
    headingstyle:{
      marginTop:5
    },
    row:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    levelContainer:{
      backgroundColor:Color.primary400,
      flex:1,
      paddingVertical:8,
      borderRadius:18,
      marginHorizontal:10,
      flexDirection:'row',
      justifyContent:'center'
    },
    leveltxt:{
      color:'white'
    },
    bggreen:{
      backgroundColor:Color.green
    },
    bgred:{
      backgroundColor:Color.red
    },
    bgyel:{
      backgroundColor:Color.yellow
    },
    alignCen:{
      alignItems:'center'
    },
    NumberTextInput:{
      fontSize:30,
      color:'white',
      borderBottomColor:'white',
      borderBottomWidth:1
    },
    numberTextInputContainer:{
      marginTop:8,
    }
})

