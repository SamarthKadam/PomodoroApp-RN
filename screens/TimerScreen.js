import { View,StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color } from '../constants/Colors'
import TimerComponent from '../components/TimerComponent'
import TaskList from '../components/TaskList'
import { useIsFocused, useRoute } from '@react-navigation/native'
import Popup from '../components/Popup'

export default function Timer() {

  const route=useRoute();
  const psdData=route.params.chosen;
  data=psdData[0];
  console.log("this is data",data);
 const isFocused=useIsFocused();
 const [showTimer,setShowTimer]=useState(false);
 const[showPopUp,setShowPopUp]=useState(false);
 const[popMsg,setPopMsg]=useState('');

 useEffect(()=>{
  if(isFocused)
  {
    setShowTimer(true);
  }
  else{
    setShowTimer(false);
  }
 },[isFocused])



 function showPop(val,interval)
 {
  setShowPopUp(val);
  setPopMsg(interval);
 }

  return (
    <View style={styles.screen}>
      {showPopUp&&<Popup message={`Take a rest of ${popMsg} min then play the timer`}></Popup>}
      <TaskList id={data.id} show={false} compltdinterval={data.compltdinterval} title={data.title} time={data.time} priority={data.priority} interval={data.interval} startTaskTimer={()=>{}} deleteTaskHandler={()=>{}}></TaskList>
     {showTimer&&<TimerComponent showPopUp={showPopUp} setShowPopUp={showPop} data={data}></TimerComponent>}
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