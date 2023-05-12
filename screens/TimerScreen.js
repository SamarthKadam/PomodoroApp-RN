import { View,StyleSheet,Text, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color } from '../constants/Colors'
import TimerComponent from '../components/TimerComponent'
import TaskList from '../components/TaskList'
import Button from '../utils/Button'
import { useIsFocused, useRoute } from '@react-navigation/native'
// import CircularProgress from 'react-native-circular-progress-indicator'

export default function Timer() {

  const route=useRoute();
  const psdData=route.params.chosen;
  data=psdData[0];
 const isFocused=useIsFocused();
 const [showTimer,setShowTimer]=useState(false);

 useEffect(()=>{
  if(isFocused)
  {
    console.log("isfocued");
    setShowTimer(true);
  }
  else{
    console.log("removed");
    setShowTimer(false);
  }
 },[isFocused])


  return (
    <View style={styles.screen}>
      <TaskList id={data.id} title={data.title} time={data.time} priority={data.priority} interval={data.interval} startTaskTimer={()=>{}} deleteTaskHandler={()=>{}}></TaskList>
     {showTimer&&<TimerComponent data={data}></TimerComponent>}
    </View>
  )
}
const styles=StyleSheet.create({
  screen:{
    flex:1,
    paddingTop:84,
    paddingHorizontal:10,
    backgroundColor:Color.primary800
  }
})